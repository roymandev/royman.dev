import AppListItem from '@/components/AppListItem';
import CustomLink from '@/components/CustomLink';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomSeo from '@/components/utils/CustomSeo';
import { getPosts } from '@/lib/mdx';
import { ProjectPostHeader } from '@/types';
import type { GetStaticProps, NextPage } from 'next';

export interface HomePageProps {
  applications: ProjectPostHeader[];
}

const Home: NextPage<HomePageProps> = ({ applications }) => {
  return (
    <>
      <CustomSeo title="Royman" description="Personal Website" slug="/" />

      <Header />

      <main className="container mx-auto max-w-4xl px-6">
        <section className="py-40 text-center">
          <header>
            <h1 className="text-5xl font-bold uppercase tracking-[.2em]">
              Royman
            </h1>
            <p className="text-lg text-teal-100/50">Frontend Developer</p>
          </header>

          <p className="mx-auto mt-6 max-w-sm text-xl">
            Welcome to my personal website where I share what I&apos;m learn and
            make in Frontend Development.
          </p>
        </section>

        <section className="text-left">
          <h2 className="text-2xl font-bold">My Application</h2>

          <div className="mt-4 mb-2 grid gap-4 md:grid-cols-2">
            {applications.map((app) => (
              <AppListItem key={app.slug} {...app} />
            ))}
          </div>

          <CustomLink href="/project">See all my projects</CustomLink>
        </section>
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const projects = (await getPosts<ProjectPostHeader>('/project')).map(
    (project) => project.header,
  );

  const applications = projects.filter(
    (project) => project.type === 'application',
  );

  return { props: { applications } };
};

export default Home;
