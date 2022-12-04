import AppList from '@/components/AppList';
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

    <main className="container mx-auto py-20 px-2 text-center">
      <section className="mx-auto mb-10">
        <h1 className="mb-4 text-4xl font-bold">Project</h1>
        <p>Showcase of my project</p>
      </section>

      <section className="mx-auto">
        <AppList apps={apps} />
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
