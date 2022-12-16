import CustomButton from '@/components/CustomButton';
import { Project } from 'contentlayer/generated';
import Image from 'next/image';

const AppListItem = ({ title, description, iconUrl, slug }: Project) => (
  <CustomButton
    key={slug}
    href={`project/${slug}`}
    className="h-auto items-start gap-4 p-4"
  >
    {iconUrl && (
      <div className="h-20 w-20 shrink-0">
        <Image src={iconUrl} alt={title} width="80" height="80" />
      </div>
    )}
    <div className="flex flex-col justify-center self-center">
      <h3 className="font-bold">{title}</h3>
      <p className="text-base text-slate-600 transition-colors duration-500 dark:text-neutral-500">
        {description}
      </p>
    </div>
  </CustomButton>
);

export default AppListItem;
