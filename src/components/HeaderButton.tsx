import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

export interface HeaderButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const BASE_CLASS =
  'py-2 px-5 transition-all hover:bg-zinc-800 hover:shadow hover:text-white';

const HeaderButton = ({
  href,
  className,
  children,
  onClick,
}: HeaderButtonProps) => {
  if (href)
    return (
      <BaseLink className={twclsx(BASE_CLASS, className)} href={href}>
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
