'use client';

import { motion } from 'framer-motion';
import styles from './MainPage.module.css';
import { DataTypes } from '@/types/DataTypes';

interface MainPageProps {
  data: DataTypes;
}

export const MainPage: React.FC<MainPageProps> = ({ data }) => {
  return (
    <div className={styles.hero}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.title}
      </motion.h1>
      <motion.div
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>{data.intro.greeting}</p>
        <p>{data.intro.description}</p>
      </motion.div>
    </div>
  );
};
