import CustomButton from '@/components/CustomButton';
import NavItem from '@/components/NavItem';
import SocialLinks from '@/components/SocialLinks';
import ThemeButton from '@/components/ThemeButton';
import twclsx from '@/lib/twclsx';
import { useState } from 'react';
import { HiBars2, HiXMark } from 'react-icons/hi2';

export type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={twclsx(
        'container inset-0 z-10 mx-auto flex max-w-4xl flex-col-reverse justify-end gap-8 bg-slate-300 py-8 px-6 dark:bg-neutral-900 sm:flex-row',
        className,
        navOpen && 'fixed sm:relative',
      )}
    >
      <div
        className={twclsx(
          'mt-auto flex justify-center gap-3 sm:hidden',
          !navOpen && 'hidden',
        )}
      >
        <SocialLinks />
      </div>

      <nav
        className={twclsx(
          'flex flex-col gap-2 sm:-ml-5 sm:mr-auto sm:flex-row sm:gap-1',
          !navOpen && 'hidden sm:flex',
        )}
      >
        <NavItem href="/">Home</NavItem>
        <NavItem href="/project">Projects</NavItem>
        <NavItem href="/resume">Resume</NavItem>
      </nav>

      <div className="flex items-center sm:ml-auto">
        <CustomButton
          title="Toggle nav"
          icon
          type="secondary"
          onClick={() => setNavOpen(!navOpen)}
          className="sm:hidden"
        >
          {navOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars2 className="h-6 w-6" />
          )}
        </CustomButton>

        <ThemeButton className="ml-auto" />
      </div>
    </header>
  );
};

export default Header;
