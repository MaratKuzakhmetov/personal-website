'use client';

import { motion } from 'framer-motion';
import styles from './MainPage.module.css';
import { DataTypes } from '@/types/DataTypes';

import { PortableTextBlock } from '@/components/PortableTextBlock';

interface MainPageProps {
  data: DataTypes;
}

export const MainPage: React.FC<MainPageProps> = ({ data }) => {
  console.log('data', data);
  return (
    <div className={styles.hero}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.mainTitle}
      </motion.h1>
      <motion.div
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <PortableTextBlock content={data.mainText} type="mainPage" />
      </motion.div>
    </div>
  );
};
