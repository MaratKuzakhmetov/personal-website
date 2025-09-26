import { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  globalSettings: any;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ globalSettings, children }) => {
  // console.log('Layout render, globalSettings =', globalSettings);
  // console.trace();
  return (
    <div className={styles.layoutWrapper}>
      <Header />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainContent}>{children}</div>
        </div>
      </main>

      <Footer data={globalSettings.footer} />
    </div>
  );
};
