'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

import styles from './MainPage.module.css';
import { DataTypes } from '@/types/DataTypes';

import { PortableTextBlock } from '@/components/PortableTextBlock';
import { generateNavLink } from '@/utils/generateNavLink';

interface MainPageProps {
  data: DataTypes;
}

export const MainPage: React.FC<MainPageProps> = ({ data }) => {
  const params = useParams();

  const currentLang = params?.lang;
  return (
    <div className={styles.root}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={generateNavLink(currentLang as string, 'about')}>{data.mainTitle}</Link>
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
