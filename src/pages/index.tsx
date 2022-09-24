import AppList from '@/components/AppList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { myApps } from '@/data/myApps';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Royman</title>
      </Head>

      <Header />

      <main className="mx-auto flex max-w-4xl flex-col gap-10">
        <section className="relative grid h-[80vh] place-content-center text-center text-xl leading-relaxed md:text-2xl">
          <div className="absolute inset-0 flex items-center justify-center gap-14">
            <span className="h-[40vh] w-px bg-stone-300"></span>
            <span className="h-[60vh] w-px bg-stone-300"></span>
            <span className="h-[40vh] w-px bg-stone-300"></span>
          </div>
          <div className="z-10 bg-white py-6 px-4 leading-snug md:py-8 md:leading-normal">
            <p className="mb-4 text-3xl font-bold">Hi I&apos;m Royman</p>
            <p>I&apos;m a man who loves to learn and create things.</p>
            <p>Thats why i learning programming and making great apps.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Applications</h2>
          <p className="mb-10">Apps that i made, more app coming soon.</p>
          <AppList appList={myApps} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
