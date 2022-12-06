import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionCertificates = () => (
  <BaseSection title="Certificates">
    <ul className="ml-4 list-disc space-y-1">
      {royman.certificates.map((certificate) => (
        <li key={certificate.url}>
          <a href={certificate.url} className="underline">
            {certificate.title}
          </a>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionCertificates;
