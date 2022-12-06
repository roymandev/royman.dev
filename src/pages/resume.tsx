import { NextPage } from 'next';
import BaseLink from '@/components/BaseLink';
import SectionContacts from '@/components/Resume/SectionContacts';
import SectionSummary from '@/components/Resume/SectionSummary';
import SectionSkills from '@/components/Resume/SectionSkills';
import SectionProjects from '@/components/Resume/SectionProjects';
import SectionExperiences from '@/components/Resume/SectionExperiences';
import SectionEducations from '@/components/Resume/SectionEducations';
import CustomSeo from '@/components/utils/CustomSeo';
import SectionCertificates from '@/components/Resume/SectionCertificates';

const Resume: NextPage = () => {
  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <CustomSeo title="Resume" description="Personal website" slug="/resume" />

      <div className="mx-auto flex max-w-lg flex-col gap-16 px-6 py-28 print:max-w-full print:p-0 print:text-black sm:max-w-4xl print:sm:p-0">
        <div className="absolute inset-x-0 top-0 bg-cyan-100/5 py-1 text-center print:hidden">
          You can{' '}
          <button className="font-bold underline" onClick={printHandler}>
            print
          </button>{' '}
          this page to get the PDF version.
        </div>

        <header className="flex flex-col items-center border-b border-cyan-100/20 pb-6 print:mx-0 print:mt-0 print:max-w-none print:border-black sm:flex-row sm:pb-10">
          <div>
            <h1 className="mb-2 text-5xl font-bold">
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
          <SectionCertificates />
          <SectionEducations />
          <SectionExperiences />
        </main>
      </div>
    </>
  );
};

export default Resume;
