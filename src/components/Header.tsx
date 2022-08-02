import HeaderLink from '@/components/HeaderLink';

const Header = () => (
  <header className="relative mx-auto flex w-full max-w-6xl items-center p-8 uppercase tracking-widest">
    <hr className="absolute inset-x-0 border-stone-300" />
    <nav className="z-10 flex flex-1 gap-2">
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/">Portfolio</HeaderLink>
    </nav>

    <HeaderLink href="/" className="text-3xl font-medium">
      Royman
    </HeaderLink>

    <div className="z-10 flex flex-1 justify-end">
      <HeaderLink href="https://github.com/roymandev">Github</HeaderLink>
    </div>
  </header>
);

export default Header;
