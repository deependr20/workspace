'use client';

import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  // next-themes provides a useTheme hook which returns an object.
  // We wrap it to expose a simple `theme` value and a `toggleTheme` helper.
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    // setTheme accepts 'light' | 'dark' | 'system'
    setTheme(newTheme as any);
  };

  return { theme, toggleTheme };
};
