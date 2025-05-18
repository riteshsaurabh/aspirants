import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

const NEWS_API_KEY = process.env.NEWSDATA_API_KEY; // put your key in .env.local

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "UPSC", refresh = "false" } = req.query;
  const q = String(keyword);
  const forceRefresh = refresh === "true";

  // 1. Check for cached query in the last 2 hours (unless forceRefresh)
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const { data: cachedQuery, error: cacheError } = await supabase
    .from("news_queries")
    .select("*")
    .eq("keywords", q)
    .gte("fetched_at", twoHoursAgo)
    .order("fetched_at", { ascending: false })
    .limit(1)
    .single();

  if (!forceRefresh && cachedQuery && cachedQuery.article_ids && cachedQuery.article_ids.length > 0) {
    // 2. Fetch articles from Supabase by IDs
    const { data: articles, error: artErr } = await supabase
      .from("news_articles")
      .select("*")
      .in("id", cachedQuery.article_ids);
    if (artErr) return res.status(500).json({ error: artErr.message });
    return res.status(200).json({ articles });
  }

  // 3. Fetch news from NewsData API
  const url = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=${encodeURIComponent(q)}`;
  const newsRes = await fetch(url);
  const newsJson = await newsRes.json();

  if (!newsJson.results) {
    return res.status(500).json({ error: "No news found" });
  }

  // 4. Prepare news for Supabase
  const articles = newsJson.results.map((item: any) => ({
    title: item.title,
    description: item.description,
    link: item.link,
    image_url: item.image_url,
    date: item.pubDate,
    source: item.source_name,
    language: item.language,
    category: item.category?.join(",") || null,
    // add more fields as per your schema
  }));

  // 5. Insert news into Supabase (avoid duplicates by link or title), collect IDs
  const insertedIds: string[] = [];
  for (const article of articles) {
    const { data, error } = await supabase
      .from("news_articles")
      .upsert([article], { onConflict: "link" })
      .select("id")
      .single();
    if (data && data.id) insertedIds.push(data.id);
    if (error) {
      // Optionally log or skip errors
      console.error("Supabase insert error:", error);
    }
  }

  // 6. Record the query in news_queries (upsert by keywords)
  await supabase.from("news_queries").upsert([
    { keywords: q, fetched_at: new Date().toISOString(), article_ids: insertedIds }
  ], { onConflict: "keywords" });

  // 7. For each article, call OpenAI (via generate-questions API) and attach questions
  const articlesWithQuestions = [];
  for (const article of articles) {
    let questions = [];
    try {
      const resp = await fetch(`${req.headers.origin || ''}/api/generate-questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ article: article.description || article.title }),
      });
      const data = await resp.json();
      questions = data.questions || [];
    } catch (e) {
      console.error('OpenAI error:', e);
    }
    articlesWithQuestions.push({ ...article, questions });
  }

  // 8. Return news to frontend
  res.status(200).json({ articles: articlesWithQuestions });
} 