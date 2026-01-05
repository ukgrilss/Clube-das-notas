import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SongCategory {
  title: string;
  songs: string[];
}

export interface Bonus {
  title: string;
  description: string;
  oldPrice: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}