import { useTheme as useNextTheme } from 'next-themes';

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return { resolvedTheme, toggleTheme };
};

export default useTheme;
