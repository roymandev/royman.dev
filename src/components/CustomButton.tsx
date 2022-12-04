import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

export interface CustomButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  icon?: boolean;
}

const CustomButton = ({
  href,
  className,
  children,
  onClick,
  type = 'primary',
  icon = false,
}: CustomButtonProps) => {
  const BASE_CLASS = twclsx(
    'flex h-12 items-center transition-all hover:bg-zinc-700/60 hover:text-white',
    icon ? 'w-12 justify-center' : 'px-5',
    type === 'primary' && 'bg-zinc-800 shadow',
  );

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

export default CustomButton;
