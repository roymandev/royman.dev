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
  url: string;
  techs: TechList[];
}
