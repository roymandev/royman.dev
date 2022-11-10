import AppListItem from '@/components/AppListItem';
import { AppData } from '@/types';

export interface AppListProps {
  apps: AppData[];
}

const AppList = ({ apps }: AppListProps) => (
  <div className="flex flex-col justify-center gap-4 px-4 sm:flex-row">
    {apps.map((app) => (
      <AppListItem key={app.liveUrl} app={app} />
    ))}
  </div>
);

export default AppList;
