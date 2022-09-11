import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionSummary = () => (
  <BaseSection title="Summary">
    <p>{royman.summary}</p>
  </BaseSection>
);

export default SectionSummary;
