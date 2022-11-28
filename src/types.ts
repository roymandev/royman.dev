export type TechList =
  | 'react'
  | 'typescript'
  | 'firebase'
  | 'tailwindcss'
  | 'vite'
  | 'jotai'
  | 'nextjs';

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
  techs: TechList[];
  liveUrl?: string;
  repoUrl?: string;
  iconUrl?: string;
  imageUrl?: string;
}
