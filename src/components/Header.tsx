import HeaderButton from '@/components/HeaderButton';
import twclsx from '@/lib/twclsx';
import { useState } from 'react';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={twclsx(
        'fixed top-0 z-20 mx-auto flex max-w-4xl gap-3 px-8 uppercase tracking-widest bg-white [&+*]:mt-20',
        openNav ? 'inset-0 flex-col' : 'inset-x-0 h-20 items-center',
      )}
    >
      <div className="z-10 flex h-20 w-full items-center">
        <hr className="absolute inset-x-0 border-stone-300" />

        <HeaderButton href="/" className="text-center text-3xl font-medium">
          Royman
        </HeaderButton>

        <HeaderButton
          className={twclsx(
            'ml-auto flex h-11 w-11 items-center justify-center p-0',
            !openNav && 'md:hidden',
          )}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RiCloseFill className="h-6 w-6" />
          ) : (
            <RiMenuFill className="h-5 w-5" />
          )}
        </HeaderButton>
      </div>

      <nav
        className={twclsx(
          'z-10 gap-2 flex text-lg',
          openNav ? 'flex-col py-10' : 'ml-auto hidden md:flex',
        )}
      >
        <HeaderButton href="/resume">Resume</HeaderButton>
        <HeaderButton href="https://github.com/roymandev">Github</HeaderButton>
      </nav>
    </header>
  );
};

export default Header;
