import { NextPage } from 'next';
import Head from 'next/head';
import BaseLink from '@/components/BaseLink';
import SectionContacts from '@/components/Resume/SectionContacts';
import SectionSummary from '@/components/Resume/SectionSummary';
import SectionSkills from '@/components/Resume/SectionSkills';
import SectionProjects from '@/components/Resume/SectionProjects';
import SectionExperiences from '@/components/Resume/SectionExperiences';
import SectionEducations from '@/components/Resume/SectionEducations';

const Resume: NextPage = () => {
  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>Royman - Resume</title>
      </Head>

      <div className="mx-auto flex max-w-lg flex-col gap-16 px-10 py-16 print:max-w-full print:p-0 sm:max-w-4xl sm:py-20 print:sm:p-0">
        <div className="fixed inset-x-0 top-0 bg-stone-200 py-1 text-center print:hidden">
          You can{' '}
          <button className="font-bold underline" onClick={printHandler}>
            print
          </button>{' '}
          this page to get the PDF version.
        </div>

        <header className="flex flex-col items-center border-b pb-6 print:mx-0 print:mt-0 print:max-w-none sm:flex-row sm:pb-10">
          <div>
            <h1 className="mb-4 text-5xl font-bold">
              <BaseLink href="/" className="uppercase tracking-[.5rem]">
                Royman
              </BaseLink>
            </h1>
            <p className="text-xl">Frontend Web Developer</p>
          </div>
          <article className="mt-10 text-center sm:mt-0 sm:ml-auto sm:text-right">
            <h3 className="font-bold uppercase tracking-[.25rem]">Medan</h3>
            <p>Sumatera Utara, Indonesia</p>
          </article>
        </header>

        <main className="grid grid-cols-1 gap-12 print:grid-cols-2 sm:grid-cols-2">
          <SectionContacts />
          <SectionSummary />
          <SectionSkills />
          <SectionProjects />
          <SectionExperiences />
          <SectionEducations />
        </main>
      </div>
    </>
  );
};

export default Resume;
