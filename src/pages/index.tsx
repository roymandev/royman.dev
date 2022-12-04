import AppList from '@/components/AppList';
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

      <main className="container mx-auto flex flex-col gap-10 px-2">
        <section className="relative grid h-[80vh] place-content-center text-center text-lg leading-relaxed sm:text-xl md:text-2xl">
          <div className="absolute inset-0 flex items-center justify-center gap-14">
            <span className="h-[40vh] w-px bg-zinc-600"></span>
            <span className="h-[60vh] w-px bg-zinc-600"></span>
            <span className="h-[40vh] w-px bg-zinc-600"></span>
          </div>
          <div className="z-10 bg-zinc-900 py-6 px-4 leading-snug md:py-8 md:leading-normal">
            <p className="mb-4 text-3xl font-bold">Hi I&apos;m Royman</p>
            <p>I&apos;m a man who loves to learn and create things.</p>
            <p>Thats why i learning programming and making great apps.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-center text-2xl font-bold">Applications</h2>
          <p className="mb-10 text-center">
            Apps that i made, more app coming soon.
          </p>

          <AppList apps={applications} />
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
