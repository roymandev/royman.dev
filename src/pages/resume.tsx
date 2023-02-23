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
import Header from '@/components/Header';
import CustomButton from '@/components/CustomButton';
import { HiOutlinePrinter } from 'react-icons/hi2';
import Footer from '@/components/Footer';
import { twMerge } from 'tailwind-merge';

const Resume: NextPage = () => {
  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <CustomSeo title="Resume" description="Personal website" slug="/resume" />

      <Header className="print:hidden" />

      <div
        className={twMerge(
          'mt-10 mb-14 flex items-center justify-center gap-3 rounded-lg px-6',
          'print:hidden',
        )}
      >
        <CustomButton
          title="Print resume"
          icon
          className="shrink-0"
          onClick={printHandler}
        >
          <HiOutlinePrinter className="h-5 w-5" />
        </CustomButton>
        <p>You can print this page to get the PDF version.</p>
      </div>

      <div
        className={twMerge(
          'mx-auto flex max-w-lg flex-col py-5 px-6',
          'sm:max-w-4xl',
          'print:max-w-full print:p-0 print:text-black',
        )}
      >
        <header
          className={twMerge(
            'flex flex-col items-center border-b border-slate-400 pb-6',
            'dark:border-neutral-700',
            'sm:flex-row sm:pb-10',
            'print:border-black print:flex-row print:pb-10',
          )}
        >
          <div>
            <h1 className="mb-2 text-5xl font-bold">
              <BaseLink href="/" className="uppercase tracking-[.5rem]">
                Royman
              </BaseLink>
            </h1>
            <p className="text-xl">Frontend Web Developer</p>
          </div>
          <article
            className={twMerge(
              'mt-10 text-center',
              'sm:mt-0 sm:ml-auto sm:text-right',
              'print:mt-0 print:ml-auto print:text-right',
            )}
          >
            <span className="font-bold uppercase tracking-[.25rem]">Medan</span>
            <p>Sumatera Utara, Indonesia</p>
          </article>
        </header>

        <main
          className={twMerge(
            'mt-12 grid grid-cols-1 gap-y-12 gap-x-8',
            'sm:grid-cols-2',
            'print:grid-cols-2',
          )}
        >
          <SectionContacts />
          <SectionSummary />
          <SectionSkills />
          <SectionCertificates />
          <SectionExperiences />
          <SectionProjects />
          <SectionEducations />
        </main>
      </div>

      <Footer className="print:hidden" />
    </>
  );
};

export default Resume;
