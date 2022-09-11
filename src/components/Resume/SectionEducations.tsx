import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionEducations = () => (
  <BaseSection title="Educations">
    <ul>
      {royman.educations.map((education) => (
        <li key={education.grade} className="flex flex-col gap-2">
          <h3 className="font-medium">
            {education.school}, {education.city}
          </h3>
          <p>{education.grade}</p>
          <b className="font-medium">
            {education.start_date} - {education.end_date}
          </b>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionEducations;
