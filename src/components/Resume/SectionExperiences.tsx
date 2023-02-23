import BaseSection from '@/components/Resume/BaseSection';

const SectionExperiences = () => (
  <BaseSection title="Experiences" className="print:col-span-2 sm:col-span-2">
    <article className="mb-6 space-y-2 py-1">
      <h2 className="text-xl font-bold leading-8">
        Freelance React.js Developer
      </h2>
      <p>PT.Sinergi Rajawali Mataram, February 2023 - Present</p>

      <ul className="ml-8 list-disc">
        <li>
          Collaborating with a team of developers to build dashboards that
          display various data using interactive charts.
        </li>
        <li>
          Using <b>Git</b> for version control and collaborating with the team
          using <b>Agile methodologies</b>.
        </li>
        <li>
          Translating designs from Figma into responsive <b>React</b> components
          using <b>Next.js</b> with <b>Mantine.dev</b>.
        </li>
      </ul>
    </article>
  </BaseSection>
);

export default SectionExperiences;
