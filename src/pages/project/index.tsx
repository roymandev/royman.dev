import AppListItem from '@/components/AppListItem';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomSeo from '@/components/utils/CustomSeo';
import { getPosts } from '@/lib/mdx';
import { ProjectPostHeader } from '@/types';
import { GetStaticProps, NextPage } from 'next';

export interface ProjectListPageProps {
  apps: ProjectPostHeader[];
}

const ProjectListPage: NextPage<ProjectListPageProps> = ({ apps }) => (
  <>
    <CustomSeo
      title="Project List"
      description="Showcase of my project"
      slug="project"
    />

    <Header />

    <main className="container mx-auto max-w-4xl p-8">
      <section className="mx-auto mb-10">
        <h1 className="mb-4 text-5xl font-bold">Projects</h1>
        <p className="text-cyan-100/50">
          Showcase of my project that I&apos;ve created using with my knowledge
          in Frontend Development.
        </p>
      </section>

      <section className="mx-auto">
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          {apps.map((app) => (
            <AppListItem key={app.slug} {...app} />
          ))}
        </section>
      </section>
    </main>

    <Footer />
  </>
);

export const getStaticProps: GetStaticProps<
  ProjectListPageProps
> = async () => {
  const projects = await getPosts<ProjectPostHeader>('/project');

  const apps = projects.map((project) => project.header);

  return { props: { apps } };
};

export default ProjectListPage;
