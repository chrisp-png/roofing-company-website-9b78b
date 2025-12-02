/*
  # Social Media Links Management

  ## Overview
  Centralized storage for social media profiles with verification status,
  follower counts, and display preferences.

  ## 1. New Tables

  ### `social_media_links`
  - `id` (uuid, primary key)
  - `platform` (text) - Social media platform name
  - `profile_url` (text) - Full profile URL
  - `username` (text) - Platform username/handle
  - `display_name` (text) - Display text for links
  - `icon_name` (text) - Icon identifier for frontend
  - `follower_count` (integer) - Current follower/subscriber count
  - `is_verified` (boolean) - Platform verification status
  - `is_active` (boolean) - Show in footer/navigation
  - `display_order` (integer) - Sort order in UI
  - `created_at`, `updated_at` (timestamptz)

  ## 2. Security
  - Enable RLS
  - Public read for active links
  - Authenticated write access
*/

CREATE TABLE IF NOT EXISTS social_media_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL CHECK (platform IN ('facebook', 'instagram', 'youtube', 'linkedin', 'tiktok', 'pinterest', 'twitter', 'google_business')),
  profile_url text NOT NULL,
  username text,
  display_name text NOT NULL,
  icon_name text,
  follower_count integer DEFAULT 0,
  is_verified boolean DEFAULT false,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(platform)
);

CREATE INDEX IF NOT EXISTS idx_social_media_active ON social_media_links(is_active, display_order) WHERE is_active = true;

ALTER TABLE social_media_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read active social links"
  ON social_media_links FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated manage social links"
  ON social_media_links FOR ALL
  TO authenticated
  USING (true);

CREATE TRIGGER update_social_media_links_updated_at
  BEFORE UPDATE ON social_media_links
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert verified social media profiles
INSERT INTO social_media_links (platform, profile_url, username, display_name, icon_name, follower_count, is_verified, is_active, display_order) VALUES
('facebook', 'https://www.facebook.com/AllPhaseConstructionUsA', 'AllPhaseConstructionUsA', 'Facebook', 'facebook', 0, true, true, 1),
('instagram', 'https://www.instagram.com/all_phase_construction_usa/', 'all_phase_construction_usa', 'Instagram', 'instagram', 0, true, true, 2),
('youtube', 'https://www.youtube.com/@allphaseconstructionusa5626', 'allphaseconstructionusa5626', 'YouTube', 'youtube', 0, true, true, 3),
('linkedin', 'https://www.linkedin.com/company/all-phase-construction-usa-llc', 'all-phase-construction-usa-llc', 'LinkedIn', 'linkedin', 0, true, true, 4),
('google_business', 'https://g.co/kgs/5gnq7v', NULL, 'Google', 'map-pin', 0, true, true, 5)
ON CONFLICT (platform) DO UPDATE
SET
  profile_url = EXCLUDED.profile_url,
  username = EXCLUDED.username,
  display_name = EXCLUDED.display_name,
  icon_name = EXCLUDED.icon_name,
  is_verified = EXCLUDED.is_verified,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = now();
