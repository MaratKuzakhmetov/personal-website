'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [animate, setAnimate] = useState(false);

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
      <div className={styles.icon} />
    </motion.button>
  );
};
