export type TechList =
  | 'react'
  | 'typescript'
  | 'firebase'
  | 'tailwindcss'
  | 'vite'
  | 'jotai';

export interface AppData {
  title: string;
  description: string;
  url: string;
  techs: TechList[];
}
