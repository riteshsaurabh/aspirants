import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

const NEWS_API_KEY = process.env.NEWSDATA_API_KEY; // put your key in .env.local

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "UPSC" } = req.query;

  // 1. Fetch news from NewsData API
  const url = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=${encodeURIComponent(keyword as string)}`;
  const newsRes = await fetch(url);
  const newsJson = await newsRes.json();

  if (!newsJson.results) {
    return res.status(500).json({ error: "No news found" });
  }

  // 2. Prepare news for Supabase
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

  // 3. Insert news into Supabase (avoid duplicates by link or title)
  for (const article of articles) {
    const { data, error } = await supabase
      .from("news_articles")
      .upsert([article], { onConflict: "link" }); // assumes 'link' is unique
    if (error) {
      // Optionally log or skip errors
      console.error("Supabase insert error:", error);
    }
  }

  // 4. For each article, call OpenAI (via generate-questions API) and attach questions
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

  // 5. Return news to frontend
  res.status(200).json({ articles: articlesWithQuestions });
} 