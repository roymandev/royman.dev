import AppListItem, { AppListItemProps } from '@/components/AppListItem';

export interface AppListProps {
  apps: AppListItemProps[];
}

const AppList = ({ apps }: AppListProps) => (
  <div className="flex flex-wrap justify-center gap-2">
    {apps.map((app) => (
      <AppListItem key={app.repoUrl} {...app} />
    ))}
  </div>
);

export default AppList;
