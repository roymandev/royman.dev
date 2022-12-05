import BaseLink from '@/components/BaseLink';
import twclsx from '@/lib/twclsx';

export interface CustomButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  icon?: boolean;
  disabled?: boolean;
}

const CustomButton = ({
  href,
  className,
  children,
  onClick,
  type = 'primary',
  icon = false,
  disabled = false,
}: CustomButtonProps) => {
  const BASE_CLASS = twclsx(
    'flex h-11 items-center rounded-lg transition duration-300 hover:bg-cyan-100/5 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/70 ',
    icon ? 'w-11 justify-center' : 'px-5',
    type === 'primary' &&
      'bg-cyan-100/5 shadow hover:bg-cyan-100/10 disabled:bg-transparent disabled:text-cyan-100/50 disabled:shadow-none',
  );

  if (href)
    return (
      <BaseLink className={twclsx(BASE_CLASS, className)} href={href}>
        {children}
      </BaseLink>
    );

  return (
    <button
      className={twclsx(BASE_CLASS, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
