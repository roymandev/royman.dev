import AppListItem from '@/components/AppListItem';
import CustomInput from '@/components/CustomInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PillsCheckbox from '@/components/PillsCheckbox';
import CustomSeo from '@/components/utils/CustomSeo';
import clsx from 'clsx';
import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useDeferredValue, useEffect, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export interface ProjectListPageProps {
  apps: Project[];
}

export const getStaticProps: GetStaticProps<
  ProjectListPageProps
> = async () => {
  return { props: { apps: allProjects } };
};

const ProjectListPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ apps }) => {
  const [techList, setTechList] = useState<Project['techs']>([]);
  const [query, setQuery] = useState('');
  const defferedQuery = useDeferredValue(query);
  const [filteredApps, setFilteredApps] = useState(apps);
  const [filteredAppsTech, setFilteredAppsTech] = useState<Project['techs']>(
    [],
  );
  const [techsFilter, setTechsFilter] = useState<Project['techs']>([]);

  useEffect(() => {
    const techs = apps
      .reduce<Project['techs']>((acc, app) => acc.concat(app.techs), [])
      .filter((value, index, self) => self.indexOf(value) === index);

    setTechList(techs);
  }, [apps]);

  useEffect(() => {
    // Filter app by title and tech
    const filteredApps = apps.filter(
      (app) =>
        app.title.toLowerCase().includes(defferedQuery.toLowerCase()) &&
        techsFilter.every((tech) => app.techs.includes(tech)),
    );

    setFilteredApps(filteredApps);
  }, [apps, techsFilter, defferedQuery]);

  useEffect(() => {
    const filteredAppsTech = filteredApps
      .reduce<Project['techs']>((acc, app) => acc.concat(app.techs), [])
      .filter((value, index, self) => self.indexOf(value) === index);

    setFilteredAppsTech(filteredAppsTech);
  }, [filteredApps]);

  return (
    <>
      <CustomSeo
        title="Project List"
        description="Showcase of my project"
        slug="project"
      />

      <Header />

      <main className="container mx-auto max-w-4xl py-8 px-6">
        <section className="mx-auto mb-10">
          <h1 className="mb-4 text-5xl font-bold">Projects</h1>
          <p className="text-slate-600 dark:text-neutral-500">
            Showcase of my project that I&apos;ve created using with my
            knowledge in Frontend Development.
          </p>
        </section>

        <section className="mx-auto">
          <div className="relative">
            <CustomInput
              type="text"
              className="peer w-full pr-11"
              placeholder="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <HiMagnifyingGlass
              className={clsx(
                'absolute top-3 right-3 h-5 w-5 text-slate-600',
                'peer-focus:top-2.5 peer-focus:right-2.5 peer-focus:h-6 peer-focus:w-6',
                'dark:text-neutral-500',
              )}
            />
          </div>

          <PillsCheckbox
            items={techList}
            activeItems={filteredAppsTech}
            selectedItems={techsFilter}
            onChange={setTechsFilter}
            className="mt-2"
          />

          <section className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredApps.map((app) => (
              <AppListItem key={app.slug} {...app} />
            ))}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectListPage;
