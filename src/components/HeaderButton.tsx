import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

interface HeaderButtonProps {
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const BASE_CLASS =
  'z-10 border border-transparent bg-white px-3 py-2 md:py-1 transition-colors hover:border-stone-300';

const HeaderButton = ({
  href,
  className,
  onClick,
  children,
}: HeaderButtonProps) => {
  if (href)
    return (
      <BaseLink href={href} className={twclsx(BASE_CLASS, className)}>
        {children}
      </BaseLink>
    );

  return (
    <button className={twclsx(BASE_CLASS, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
