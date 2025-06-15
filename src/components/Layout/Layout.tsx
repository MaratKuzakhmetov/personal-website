import { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import styles from './Layout.module.css';
import { DataTypes } from '@/types/DataTypes';

interface LayoutProps {
  data: DataTypes;
  globalSettings: any;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ data, globalSettings, children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header data={data} />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainContent}>{children}</div>
        </div>
      </main>

      <Footer data={globalSettings.footer} />
    </div>
  );
};
