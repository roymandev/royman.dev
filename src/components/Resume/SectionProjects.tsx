import CustomLink from '@/components/CustomLink';
import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionProjects = () => (
  <BaseSection title="Personal Projects">
    <ul>
      {royman.apps.map((app) => (
        <li key={app.url} className="flex flex-col gap-2">
          <h3 className="font-medium">
            <CustomLink href={app.url} className="print:decoration-black">
              {app.title} - {app.description}
            </CustomLink>
          </h3>
          <p>
            <span className="font-medium">Tech used:</span>
            <br />
            {app.tech.join(', ')}
          </p>
        </li>
      ))}
    </ul>
  </BaseSection>
);

export default SectionProjects;
