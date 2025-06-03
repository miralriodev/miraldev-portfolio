'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg w-full h-full transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <IconMoon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  );
};