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
    'flex h-11 items-center rounded-lg transition-all hover:bg-cyan-100/5',
    icon ? 'w-11 justify-center' : 'px-5',
    type === 'primary' && 'bg-cyan-100/5 shadow hover:bg-cyan-100/10',
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
