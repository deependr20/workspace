'use client';

import { useContext } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useContext(
    typeof window !== 'undefined' ? require('next-themes').useTheme() : [null, null]
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
