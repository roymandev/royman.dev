import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';
import { ProjectPostHeader } from '@/types';
import Image from 'next/image';

export type AppListItemProps = ProjectPostHeader;

const AppListItem = ({
  title,
  description,
  iconUrl,
  slug,
}: AppListItemProps) => (
  <BaseLink
    href={`/project/${slug}`}
    className={twclsx(
      'flex w-[400px] gap-4 border border-dashed border-zinc-700 px-6 py-4 text-left transition-all hover:border-transparent hover:bg-zinc-800 hover:shadow',
      iconUrl && 'px-4',
    )}
  >
    {iconUrl && (
      <div className="h-20 w-20 shrink-0">
        <Image src={iconUrl} alt={title} width="80" height="80" />
      </div>
    )}

    <div className="flex flex-col justify-center">
      <h3 className="mb-1 text-lg font-bold text-zinc-300">{title}</h3>
      <p className="text-base text-zinc-400">{description}</p>
    </div>
  </BaseLink>
);

export default AppListItem;
