import twclsx from '@/lib/twclsx';
import { Project } from 'contentlayer/generated';
import {
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export interface TechIconProps {
  tech: Project['techs'][0];
  className?: string;
}

const TechIcon = ({ tech, className }: TechIconProps) => {
  const BASE_CLASS = twclsx('h-6 w-6', className);

  if (tech === 'react') return <SiReact className={BASE_CLASS} title={tech} />;
  if (tech === 'typescript')
    return <SiTypescript className={BASE_CLASS} title={tech} />;
  if (tech === 'firebase')
    return <SiFirebase className={BASE_CLASS} title={tech} />;
  if (tech === 'nextjs')
    return <SiNextdotjs className={BASE_CLASS} title={tech} />;
  if (tech === 'tailwindcss')
    return <SiTailwindcss className={BASE_CLASS} title={tech} />;
  if (tech === 'vite') return <SiVite className={BASE_CLASS} title={tech} />;
  if (tech === 'supabase')
    return <SiSupabase className={BASE_CLASS} title={tech} />;

  return (
    <span className="flex h-6 items-center rounded-md bg-slate-700 px-2 text-sm font-bold text-slate-100 dark:bg-neutral-300 dark:text-neutral-900">
      {tech}
    </span>
  );
};

export default TechIcon;
