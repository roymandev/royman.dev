import HeaderLink from '@/components/HeaderLink';

const Header = () => (
  <header className="relative mx-auto mt-14 flex w-full max-w-6xl items-center justify-around gap-3 p-8 uppercase tracking-widest md:mt-0">
    <hr className="absolute inset-x-0 border-stone-300" />
    <nav className="z-10 md:flex-1">
      <HeaderLink href="https://raw.githubusercontent.com/roymandev/roymandev/main/Resume.pdf">
        Resume
      </HeaderLink>
    </nav>

    <div className="absolute inset-x-0 -top-8 flex justify-center md:relative md:top-0">
      <HeaderLink href="/" className="text-3xl font-medium">
        Royman
      </HeaderLink>
    </div>

    <div className="z-10 flex md:flex-1 md:justify-end">
      <HeaderLink href="https://github.com/roymandev">Github</HeaderLink>
    </div>
  </header>
);

export default Header;
