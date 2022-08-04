import AppListItem from '@/components/AppListItem';
import { AppData } from '@/types';

export interface AppListProps {
  appList: AppData[];
}

const AppList = ({ appList }: AppListProps) => (
  <ul className="flex flex-col justify-center gap-4 px-4 sm:flex-row">
    {appList.map((app) => (
      <AppListItem key={app.url} app={app} />
    ))}
  </ul>
);

export default AppList;
