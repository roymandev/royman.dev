import CustomButton from '@/components/CustomButton';
import { ProjectPostHeader } from '@/types';
import Image from 'next/image';

export type AppListItemProps = ProjectPostHeader;

const AppListItem = ({
  title,
  description,
  iconUrl,
  slug,
}: AppListItemProps) => (
  <CustomButton
    key={slug}
    href={`project/${slug}`}
    className="h-auto items-start gap-4 bg-cyan-100/5 p-4"
  >
    {iconUrl && (
      <div className="h-20 w-20 shrink-0">
        <Image src={iconUrl} alt={title} width="80" height="80" />
      </div>
    )}
    <div className="flex flex-col justify-center self-center">
      <h3 className="mb-1 font-bold">{title}</h3>
      <p className="text-base text-cyan-100/50">{description}</p>
    </div>
  </CustomButton>
);

export default AppListItem;
