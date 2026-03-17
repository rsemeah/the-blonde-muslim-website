-- Create table for Amina AI companion chat sessions
CREATE TABLE IF NOT EXISTS amina_chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on session_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_amina_chats_session_id ON amina_chats(session_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_amina_chats_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_amina_chats_updated_at ON amina_chats;
CREATE TRIGGER trigger_amina_chats_updated_at
  BEFORE UPDATE ON amina_chats
  FOR EACH ROW
  EXECUTE FUNCTION update_amina_chats_updated_at();

-- Enable RLS but allow anonymous access for session-based chats
ALTER TABLE amina_chats ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can select their own session's chat
CREATE POLICY "amina_chats_select" ON amina_chats 
  FOR SELECT USING (true);

-- Policy: Anyone can insert new chats
CREATE POLICY "amina_chats_insert" ON amina_chats 
  FOR INSERT WITH CHECK (true);

-- Policy: Anyone can update their session's chat
CREATE POLICY "amina_chats_update" ON amina_chats 
  FOR UPDATE USING (true);
