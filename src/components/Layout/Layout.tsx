import { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import styles from './Layout.module.css';

import { schema } from '@/utils/schema';

import { Languages } from '@/types/DataTypes';

interface LayoutProps {
  globalSettings: any;
  children: ReactNode;
  lang: Languages;
}

export const Layout: React.FC<LayoutProps> = ({ globalSettings, children, lang = 'en' }) => {
  const schemaData = schema[lang];
  return (
    <div className={styles.layoutWrapper}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer data={globalSettings.footer} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
};
