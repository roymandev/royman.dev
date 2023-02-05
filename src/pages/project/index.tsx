import AppListItem from '@/components/AppListItem';
import CustomInput from '@/components/CustomInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PillsCheckbox from '@/components/PillsCheckbox';
import CustomSeo from '@/components/utils/CustomSeo';
import useFilterProjects from '@/hooks/useFilterProjects';
import clsx from 'clsx';
import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const getUniqueProjectTechs = (projects: Project[]) =>
  Array.from(new Set(projects.flatMap((project) => project.techs)));

export interface ProjectListPageProps {
  apps: Project[];
  techList: Project['techs'];
}

export const getStaticProps: GetStaticProps<
  ProjectListPageProps
> = async () => {
  const apps = allProjects;
  const techList = getUniqueProjectTechs(apps);
  return { props: { apps, techList } };
};

const ProjectListPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ apps, techList }) => {
  const {
    filteredApps,
    titleFilter,
    setTitleFilter,
    techsFilter,
    setTechsFilter,
  } = useFilterProjects(apps);

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
          <p className="text-slate-700 dark:text-neutral-400">
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
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
            <HiMagnifyingGlass
              className={clsx(
                'absolute top-3 right-3 h-5 w-5 text-slate-700',
                'dark:text-neutral-400',
              )}
            />
          </div>

          <PillsCheckbox
            items={techList}
            activeItems={[
              ...getUniqueProjectTechs(filteredApps),
              ...techsFilter,
            ]}
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
