'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import styles from './MainPage.module.css';
import { DataTypes, Languages } from '@/types/DataTypes';

import { PortableTextBlock } from '@/components/PortableTextBlock';
import { generateNavLink } from '@/utils/generateNavLink';

interface MainPageProps {
  data: DataTypes;
}

export const MainPage: React.FC<MainPageProps> = ({ data }) => {
  const params = useParams();

  const currentLang = params?.lang as Languages;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link href={generateNavLink(currentLang, 'about')}>{data.mainTitle}</Link>
        </h1>
        <div className={styles.description}>
          <PortableTextBlock content={data.mainText} type="mainPage" />
        </div>
      </div>
    </div>
  );
};
