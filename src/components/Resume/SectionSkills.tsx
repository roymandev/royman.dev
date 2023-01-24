import BaseSection from '@/components/Resume/BaseSection';

const SectionSkills = () => (
  <BaseSection title="Skills">
    <div className="flex flex-col gap-2">
      <p>Familiar with:</p>
      <ul className="ml-8 list-disc">
        <li>
          <b>React.js</b> and <b>Next.js</b>
        </li>
        <li>
          <b>TypeScript</b> and <b>JavaScript</b>
        </li>
        <li>
          <b>Tailwind CSS</b>
        </li>
        <li>
          <b>Firebase</b> and <b>Supabase</b>
        </li>
      </ul>
      <p>for building web applications.</p>
    </div>
  </BaseSection>
);

export default SectionSkills;
