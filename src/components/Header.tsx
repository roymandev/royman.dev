import HeaderButton from '@/components/HeaderButton';
import twclsx from '@/lib/twclsx';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={twclsx(
        'fixed inset-x-0 top-0 z-20 border-zinc-600 bg-zinc-900/60 backdrop-blur sm:border-b [&+*]:mt-20',
        navOpen && 'h-screen sm:h-auto',
      )}
    >
      <div className="container mx-auto flex flex-col text-lg sm:flex-row sm:items-center">
        <div className="flex items-center border-b border-zinc-600 p-2 sm:border-0 sm:p-4">
          <HeaderButton
            className="text-2xl font-bold uppercase tracking-[.3em]"
            href="/"
          >
            Royman
          </HeaderButton>

          <HeaderButton
            className="ml-auto mr-2 flex items-center justify-center p-2 sm:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </HeaderButton>
        </div>

        <div
          className={twclsx(
            'sm:ml-auto sm:justify-end gap-2 p-2',
            navOpen ? 'flex flex-col sm:flex-row' : 'hidden sm:flex',
          )}
        >
          <HeaderButton href="/resume">Resume</HeaderButton>
          <HeaderButton href="https://github.com/roymandev">
            Github
          </HeaderButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
