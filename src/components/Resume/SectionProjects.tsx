import CustomLink from '@/components/CustomLink';
import BaseSection from '@/components/Resume/BaseSection';

const SectionProjects = () => (
  <BaseSection title="Personal Projects" className="sm:col-span-2">
    <article className="mb-6 space-y-2">
      <h2 className="py-1 text-xl font-bold">Worship App</h2>
      <header className="flex items-center gap-4">
        <CustomLink href="https://worship-app.royman.dev/">Live App</CustomLink>
        |
        <CustomLink href="https://github.com/roymandev/worship-app">
          Repository
        </CustomLink>
      </header>
      <p>
        A web-based application designed to enhance the worship experience for
        church by providing an easy way to display lyrics during services.
      </p>
      <div>
        Key features:
        <ul className="ml-8 list-disc">
          <li>
            No installation needed, allowing users to easily switch devices.
          </li>
          <li>
            Import and export functionality for creating and sharing playlists.
          </li>
          <li>
            Built-in search functionality for quickly finding lyrics in the
            database.
          </li>
        </ul>
      </div>
      <p>Tech stack: React.js with TypeScript, Tailwind CSS, and Supabase.</p>
    </article>

    <article className="space-y-2">
      <h2 className="py-1 text-xl font-bold">My Notes</h2>
      <header className="flex items-center gap-x-4">
        <CustomLink href="https://my-notes.royman.dev/">Live App</CustomLink>|
        <CustomLink href="https://github.com/roymandev/my-notes">
          Repository
        </CustomLink>
      </header>
      <p>
        A web-based notes app that is designed to be responsive on all devices
        and enables users to easily create and organize notes from multiple
        devices.
      </p>
      <div>
        Tech used:
        <ul className="ml-8 list-disc">
          <li>React.js with Typescript</li>
          <li>Tailwind CSS for styling</li>
          <li>Jotai for state management</li>
          <li>Firebase for database and authentication</li>
        </ul>
      </div>
    </article>
  </BaseSection>
);

export default SectionProjects;
