import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionSkills = () => (
  <BaseSection title="Skills">
    <p className="mb-2">
      <span className="font-medium">Technologies:</span>
      <br />
      {royman.skills.tech.join(', ')}
    </p>
    <p>
      <span className="font-medium">Programming Languages:</span>
      <br />
      {royman.skills.lang.join(', ')}
    </p>
  </BaseSection>
);

export default SectionSkills;
