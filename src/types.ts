export type TechList =
  | 'react'
  | 'typescript'
  | 'firebase'
  | 'tailwindcss'
  | 'vite'
  | 'jotai'
  | 'nextjs';

export interface AppData {
  title: string;
  description: string;
  techs: TechList[];
  iconUrl?: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
}
