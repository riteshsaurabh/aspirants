-- Users table
CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    name text,
    created_at timestamp with time zone DEFAULT now()
);

-- NewsArticle table
CREATE TABLE IF NOT EXISTS news_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    source text,
    date date,
    url text,
    category text
);

-- PYQ table
CREATE TABLE IF NOT EXISTS pyqs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    question text NOT NULL,
    year integer,
    exam_type text,
    paper text,
    topic text
);

-- FlashcardSet table
CREATE TABLE IF NOT EXISTS flashcard_sets (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    category text,
    subcategory text,
    card_count integer,
    created_by uuid REFERENCES users(id),
    created_at timestamp with time zone DEFAULT now()
);

-- Flashcard table (optional, for individual cards)
CREATE TABLE IF NOT EXISTS flashcards (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    set_id uuid REFERENCES flashcard_sets(id) ON DELETE CASCADE,
    front text NOT NULL,
    back text NOT NULL
);

-- Tag table
CREATE TABLE IF NOT EXISTS tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text UNIQUE NOT NULL
);

-- NewsArticleTag join table
CREATE TABLE IF NOT EXISTS news_article_tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    news_article_id uuid REFERENCES news_articles(id) ON DELETE CASCADE,
    tag_id uuid REFERENCES tags(id) ON DELETE CASCADE
);

-- PYQTag join table
CREATE TABLE IF NOT EXISTS pyq_tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    pyq_id uuid REFERENCES pyqs(id) ON DELETE CASCADE,
    tag_id uuid REFERENCES tags(id) ON DELETE CASCADE
);

-- FlashcardSetTag join table
CREATE TABLE IF NOT EXISTS flashcard_set_tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    flashcard_set_id uuid REFERENCES flashcard_sets(id) ON DELETE CASCADE,
    tag_id uuid REFERENCES tags(id) ON DELETE CASCADE
);

-- PYQ_NewsArticle mapping table
CREATE TABLE IF NOT EXISTS pyq_news_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    pyq_id uuid REFERENCES pyqs(id) ON DELETE CASCADE,
    news_article_id uuid REFERENCES news_articles(id) ON DELETE CASCADE
);

-- UserSavedNewsArticle
CREATE TABLE IF NOT EXISTS user_saved_news_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    news_article_id uuid REFERENCES news_articles(id) ON DELETE CASCADE,
    saved_at timestamp with time zone DEFAULT now()
);

-- UserSavedPYQ
CREATE TABLE IF NOT EXISTS user_saved_pyqs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    pyq_id uuid REFERENCES pyqs(id) ON DELETE CASCADE,
    saved_at timestamp with time zone DEFAULT now()
);

-- UserSavedFlashcardSet
CREATE TABLE IF NOT EXISTS user_saved_flashcard_sets (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    flashcard_set_id uuid REFERENCES flashcard_sets(id) ON DELETE CASCADE,
    saved_at timestamp with time zone DEFAULT now()
);

-- Notes table (polymorphic association)
CREATE TABLE IF NOT EXISTS notes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    entity_type text CHECK (entity_type IN ('news_article', 'pyq', 'flashcard_set')),
    entity_id uuid NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

-- NoteTag join table (optional)
CREATE TABLE IF NOT EXISTS note_tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id uuid REFERENCES notes(id) ON DELETE CASCADE,
    tag_id uuid REFERENCES tags(id) ON DELETE CASCADE
);

-- Feedback table
CREATE TABLE IF NOT EXISTS feedback (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_name text,
    user_email text,
    type text CHECK (type IN ('feature', 'feedback')),
    feature_title text,
    message text NOT NULL,
    priority text CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for all user-facing tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pyqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_article_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE pyq_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_set_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE pyq_news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_saved_news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_saved_pyqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_saved_flashcard_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Example RLS policies
-- Only allow users to select their own saved articles
CREATE POLICY "Users can view their own saved news articles" ON user_saved_news_articles
  FOR SELECT USING (auth.uid()::uuid = user_id);

-- Only allow users to insert their own saved articles
CREATE POLICY "Users can save news articles for themselves" ON user_saved_news_articles
  FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);

-- Only allow users to select their own notes
CREATE POLICY "Users can view their own notes" ON notes
  FOR SELECT USING (auth.uid()::uuid = user_id);

-- Only allow users to insert their own notes
CREATE POLICY "Users can create notes for themselves" ON notes
  FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);

-- Allow anyone to select news articles (public)
CREATE POLICY "Public can view news articles" ON news_articles
  FOR SELECT USING (true);

-- Allow anyone to select flashcard sets (public)
CREATE POLICY "Public can view flashcard sets" ON flashcard_sets
  FOR SELECT USING (true);

-- Allow anyone to insert feedback
CREATE POLICY "Anyone can submit feedback" ON feedback
  FOR INSERT WITH CHECK (true);
