'use client';

import { Slider } from '@/components/Slider/Slider';
import { strasbourgImages } from '@/constants/strasbourg-images';

import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';
import { AboutPageTypes } from '@/types/DataTypes';

import { PortableTextBlock } from '@/components/PortableTextBlock';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface AboutPageProps {
  data: AboutPageTypes;
}

export const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <div className={styles.aboutContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <PortableTextBlock content={data.content} type="aboutPage" />
      </motion.div>
    </div>
  );
};
