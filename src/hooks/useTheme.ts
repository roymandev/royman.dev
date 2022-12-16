import { useTheme as useNextTheme } from 'next-themes';

const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, toggleTheme };
};

export default useTheme;
