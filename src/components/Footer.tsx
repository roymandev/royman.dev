import BaseLink from '@/components/BaseLink';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => (
  <footer className="my-28 text-center">
    <section>
      <h2 className="mb-10 text-2xl font-bold">Find me on</h2>
      <div className="flex justify-center gap-6">
        <BaseLink
          href="https://github.com/roymandev"
          className="transition-colors hover:text-black"
          aria-label="Github"
        >
          <SiGithub className="h-8 w-8" />
        </BaseLink>
        <BaseLink
          href="https://www.linkedin.com/in/roymandev/"
          className="transition-colors hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="h-8 w-8" />
        </BaseLink>
      </div>
    </section>
  </footer>
);

export default Footer;
