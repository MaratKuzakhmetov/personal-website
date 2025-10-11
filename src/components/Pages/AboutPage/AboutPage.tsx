'use client';

import { Slider } from '@/components/Slider/Slider';
import { strasbourgImages } from '@/constants/strasbourg-images';

import styles from './AboutPage.module.css';
import { AboutPageTypes } from '@/types/DataTypes';

import { PortableTextBlock } from '@/components/PortableTextBlock';

interface AboutPageProps {
  data: AboutPageTypes;
}

export const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <div className={styles.aboutContainer}>
      <PortableTextBlock content={data.content} type="aboutPage" />
    </div>
  );
};
