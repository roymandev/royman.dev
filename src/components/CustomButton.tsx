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
    'flex h-11 items-center rounded-lg hover:bg-slate-400/60',
    'outline-none ring-2 ring-transparent focus-visible:outline-none focus-visible:ring-indigo-500/90',
    icon ? 'w-11 justify-center' : 'px-5',
    type === 'primary' &&
      'bg-slate-400/30 dark:bg-neutral-700/30 dark:hover:bg-neutral-700/60',
    type === 'secondary' && 'dark:hover:bg-neutral-700/60',
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
