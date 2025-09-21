'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    setAnimate(true);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      key={resolvedTheme}
      initial={{ rotate: 0, scale: 1 }}
      animate={animate ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onClick={handleClick}
      className={styles.themeButton}
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <Moon size={20} color="#f7fafc" />
        ) : (
          <Sun size={20} />
        )
      ) : (
        <Sun size={20} color="transparent" />
      )}
    </motion.button>
  );
};
