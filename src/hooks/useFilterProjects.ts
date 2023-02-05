import { Project } from 'contentlayer/generated';
import { useDeferredValue, useEffect, useState } from 'react';

const matchTitle = (title: string, matchString: string) =>
  title.toLowerCase().includes(matchString.toLowerCase());

const matchTechs = (techs: Project['techs'], matchTechs: Project['techs']) =>
  matchTechs.every((tech) => techs.includes(tech));

const useFilterProjects = (apps: Project[]) => {
  const [filteredApps, setFilteredApps] = useState<Project[]>(apps);

  const [titleFilter, setTitleFilter] = useState('');
  const [techsFilter, setTechsFilter] = useState<Project['techs']>([]);
  const defferedTitleFilter = useDeferredValue(titleFilter);

  useEffect(() => {
    setFilteredApps(
      apps.filter(
        (app) =>
          matchTitle(app.title, defferedTitleFilter) &&
          matchTechs(app.techs, techsFilter),
      ),
    );
  }, [apps, defferedTitleFilter, techsFilter]);

  return {
    filteredApps,
    titleFilter,
    setTitleFilter,
    techsFilter,
    setTechsFilter,
  };
};

export default useFilterProjects;
