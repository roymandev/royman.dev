import CustomButton from '@/components/CustomButton';
import twclsx from '@/lib/twclsx';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={twclsx(
        'fixed inset-x-0 top-0 z-20 border-zinc-600 bg-zinc-900/80 backdrop-blur sm:border-b [&+*]:mt-20',
        navOpen && 'h-screen sm:h-auto',
      )}
    >
      <div className="container mx-auto flex flex-col text-lg sm:flex-row sm:items-center">
        <div className="flex items-center border-b border-zinc-600 p-2 sm:border-0 sm:p-4">
          <CustomButton
            className="text-2xl font-bold uppercase tracking-[.3em]"
            type="secondary"
            href="/"
          >
            Royman
          </CustomButton>

          <CustomButton
            className="ml-auto sm:hidden"
            type="secondary"
            icon
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </CustomButton>
        </div>

        <div
          className={twclsx(
            'gap-2 p-2 sm:ml-auto sm:justify-end',
            navOpen ? 'flex flex-col sm:flex-row' : 'hidden sm:flex',
          )}
        >
          <CustomButton type="secondary" href="/resume">
            Resume
          </CustomButton>
          <CustomButton type="secondary" href="https://github.com/roymandev">
            Github
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
