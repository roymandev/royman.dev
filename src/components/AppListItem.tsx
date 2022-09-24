import BaseLink from '@/components/BaseLink';
import { AppData, TechList } from '@/types';
import { createElement } from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export interface AppListItemProps {
  app: AppData;
}

const getIcon = (tech: TechList) => {
  switch (tech) {
    case 'react':
      return RiReactjsFill;
    case 'typescript':
      return SiTypescript;
    case 'firebase':
      return SiFirebase;
    case 'tailwindcss':
      return SiTailwindcss;
    case 'vite':
      return SiVite;
    case 'nextjs':
      return SiNextdotjs;
    default:
      return null;
  }
};

const AppListItem = ({ app }: AppListItemProps) => (
  <BaseLink
    href={app.url}
    className="block flex-1 shrink-0 border border-dashed border-stone-300 py-4 px-6 text-center transition-all hover:border-solid hover:border-stone-400 hover:shadow-lg md:max-w-[50%]"
  >
    <h3 className="mb-2 text-xl font-bold">{app.title}</h3>
    <p>{app.description}</p>
    <div className="mt-4 flex items-center justify-center gap-2">
      {app.techs.map((tech) => {
        const icon = getIcon(tech);
        if (icon)
          return createElement(icon, { key: tech, className: 'h-5 w-5' });
        return (
          <span key={tech} className="text-sm font-medium">
            {tech}
          </span>
        );
      })}
    </div>
  </BaseLink>
);

export default AppListItem;
