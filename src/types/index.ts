export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export interface RankAdvantage {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  color: string;
  icon: string;
}

export interface ApplicationFormData {
  username: string;
  age: string;
  email: string;
  experience: string;
  reason: string;
}

export interface TeamMember {
  name: string;
  role: string;
  uuid: string;
  description: string;
  summary?: {
    joinDate: string;
    specialization: string;
    achievements: string[];
    quote: string;
  };
}