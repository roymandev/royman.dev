import CustomButton from '@/components/CustomButton';
import useTheme from '@/hooks/useTheme';
import twclsx from '@/lib/twclsx';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { ImSpinner8 } from 'react-icons/im';

export interface ThemeButtonProps {
  className?: string;
}

const BASE_CLASS =
  'h-5 w-5 group-hover:h-7 group-hover:w-7 transition-[widht,height]';

const ThemeButton = ({ className }: ThemeButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <span
        className={twclsx(
          'flex h-11 w-11 items-center justify-center',
          className,
        )}
      >
        <ImSpinner8 className={'h-5 w-5 animate-spin'} />
      </span>
    );

  return (
    <CustomButton
      icon
      className={twclsx(
        'group z-20 transition-[border-radius] hover:rounded-2xl',
        className,
      )}
      onClick={toggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <HiMoon className={BASE_CLASS} />
      ) : (
        <HiSun className={BASE_CLASS} />
      )}
    </CustomButton>
  );
};

export default ThemeButton;
