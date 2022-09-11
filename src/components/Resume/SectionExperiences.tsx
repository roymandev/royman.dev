import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionExperiences = () => (
  <BaseSection title="Experiences">
    <ul>
      {royman.experiences.map((work) => (
        <li key={work.company} className="flex flex-col gap-2">
          <h3 className="font-medium">{work.position}</h3>
          <p>
            {work.company} - {work.city}
          </p>
          <span className="font-medium">
            {work.start_date} - {work.end_date}
          </span>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionExperiences;
