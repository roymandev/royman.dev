import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionProjects = () => (
  <BaseSection title="Personal Projects">
    <ul>
      {royman.apps.map((app) => (
        <li key={app.url} className="flex flex-col gap-2">
          <h3 className="font-medium">
            <a
              href={app.url}
              className="border-b border-dashed border-slate-500 transition-all hover:border-solid hover:border-slate-500 print:border-slate-500"
            >
              {app.title} - {app.description}
            </a>
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
