import CustomLink from '@/components/CustomLink';
import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionCertificates = () => (
  <BaseSection title="Certificates" className="print:col-span-2 sm:col-span-2">
    <ul className="ml-4 list-disc space-y-1">
      {royman.certificates.map((certificate) => (
        <li key={certificate.url}>
          <CustomLink href={certificate.url} className="print:decoration-black">
            {certificate.title}
          </CustomLink>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionCertificates;
