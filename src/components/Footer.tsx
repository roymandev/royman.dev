import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => (
  <footer className={twclsx('my-28 text-center', className)}>
    <section>
      <h2 className="mb-10 text-2xl font-bold">Find me on</h2>
      <div className="flex justify-center gap-6">
        <BaseLink
          href="https://github.com/roymandev"
          className="hover:text-black"
          aria-label="Github"
        >
          <SiGithub className="h-8 w-8" />
        </BaseLink>
        <BaseLink
          href="https://www.linkedin.com/in/roymandev/"
          className="hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="h-8 w-8" />
        </BaseLink>
      </div>
    </section>
  </footer>
);

export default Footer;
