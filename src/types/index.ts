export interface Project {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  content: string | null;
} 