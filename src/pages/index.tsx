import AppListItem from '@/components/AppListItem';
import CustomLink from '@/components/CustomLink';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomSeo from '@/components/utils/CustomSeo';
import { allProjects, Project } from 'contentlayer/generated';
import type { GetStaticProps, NextPage } from 'next';

export interface HomePageProps {
  applications: Project[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      applications: allProjects.filter(
        (app) => app.projectType === 'application',
      ),
    },
  };
};

const Home: NextPage<HomePageProps> = ({ applications }) => {
  return (
    <>
      <CustomSeo title="Royman" description="Personal Website" slug="/" />

      <Header />

      <main className="container mx-auto max-w-4xl px-4">
        <section className="py-40 text-center">
          <header>
            <h1 className="text-5xl font-bold uppercase tracking-[.2em]">
              Royman
            </h1>
            <p className="text-lg text-slate-600 transition-colors duration-500 dark:text-neutral-500">
              Frontend Developer
            </p>
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

export default Home;
