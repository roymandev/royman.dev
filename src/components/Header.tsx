import CustomButton from '@/components/CustomButton';
import NavItem from '@/components/NavItem';
import twclsx from '@/lib/twclsx';
import { useState } from 'react';
import { HiBars2, HiXMark } from 'react-icons/hi2';
import { RiGithubFill } from 'react-icons/ri';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={twclsx(
        'container inset-0 z-10 mx-auto flex max-w-4xl flex-col gap-8 bg-zinc-900 py-8 px-6 sm:flex-row-reverse',
        navOpen && 'fixed sm:relative',
      )}
    >
      <div className="m:ml-auto flex">
        <CustomButton
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

        <CustomButton
          href="https://github.com/roymandev"
          icon
          className="z-20 ml-auto"
        >
          <RiGithubFill className="h-6 w-6" />
        </CustomButton>
      </div>

      <nav
        className={twclsx(
          'flex flex-col gap-2 sm:-ml-5 sm:mr-auto sm:flex-row sm:gap-0',
          !navOpen && 'hidden sm:flex',
        )}
      >
        <NavItem href="/">Home</NavItem>
        <NavItem href="/project">Projects</NavItem>
        <NavItem href="/resume">Resume</NavItem>
      </nav>
    </header>
  );
};

export default Header;
