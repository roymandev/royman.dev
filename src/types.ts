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

export type PostType = 'project';

export interface BasePost<T = BasePostHeader> {
  content: string;
  header: { slug: string } & T;
}

export interface BasePostHeader {
  title: string;
  description: string;
  slug: string;
}

export interface ProjectPostHeader extends BasePostHeader {
  type: 'application' | 'submission';
  tech: TechList[];
}
