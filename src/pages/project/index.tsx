import AppListItem from '@/components/AppListItem';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomSeo from '@/components/utils/CustomSeo';
import { getPosts } from '@/lib/mdx';
import twclsx from '@/lib/twclsx';
import { ProjectPostHeader, TechList } from '@/types';
import { GetStaticProps, NextPage } from 'next';
import { useDeferredValue, useEffect, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export interface ProjectListPageProps {
  apps: ProjectPostHeader[];
}

const ProjectListPage: NextPage<ProjectListPageProps> = ({ apps }) => {
  const [techList, setTechList] = useState<TechList[]>([]);
  const [query, setQuery] = useState('');
  const defferedQuery = useDeferredValue(query);
  const [filteredApps, setFilteredApps] = useState(apps);
  const [techsFilter, setTechsFilter] = useState<TechList[]>([]);

  useEffect(() => {
    const techs = apps
      .reduce<TechList[]>((acc, app) => acc.concat(app.techs), [])
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
          <p className="text-cyan-100/50">
            Showcase of my project that I&apos;ve created using with my
            knowledge in Frontend Development.
          </p>
        </section>

        <section className="mx-auto">
          <div className="relative">
            <CustomInput
              type="text"
              className="w-full pr-11"
              placeholder="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <HiMagnifyingGlass className="absolute top-3 right-3 h-5 w-5 text-cyan-100/50" />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-1 text-sm">
            <span className="flex h-7 items-center">Tech list:</span>
            {techList.map((tech) => (
              <CustomButton
                key={tech}
                className={twclsx(
                  'h-7 px-2',
                  techsFilter.includes(tech)
                    ? 'bg-cyan-100/20 hover:bg-cyan-100/30'
                    : 'text-cyan-100/50',
                )}
                disabled={!filteredApps.find((app) => app.techs.includes(tech))}
                onClick={() => {
                  if (techsFilter.includes(tech)) {
                    setTechsFilter((prevTechs) =>
                      prevTechs.filter((prevTech) => prevTech !== tech),
                    );
                  } else setTechsFilter((prevTechs) => [...prevTechs, tech]);
                }}
              >
                {tech}
              </CustomButton>
            ))}
          </div>

          <section className="mt-4 grid gap-4 md:grid-cols-2">
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

export const getStaticProps: GetStaticProps<
  ProjectListPageProps
> = async () => {
  const projects = await getPosts<ProjectPostHeader>('/project');

  const apps = projects.map((project) => project.header);

  return { props: { apps } };
};

export default ProjectListPage;
