import BaseLink from '@/components/BaseLink';
import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionCertificates = () => (
  <BaseSection title="Certificates">
    <ul className="ml-4 list-disc space-y-1">
      {royman.certificates.map((certificate) => (
        <li key={certificate.url}>
          <BaseLink
            href={certificate.url}
            className="border-b border-dashed border-stone-500 transition-all hover:border-solid hover:border-stone-500 print:border-stone-500"
          >
            {certificate.title}
          </BaseLink>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionCertificates;
