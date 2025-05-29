'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useRouter, usePathname, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BurgerMenu } from '../BurgerMenu';
import styles from './Layout.module.css';
import { DataTypes } from '@/types/DataTypes';

import { LANGUAGES } from '@/utils/constants';
import { generateNavLink } from '@/utils/generateNavLink';

interface LayoutProps {
  data: DataTypes;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ data, children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    return (
      <button className={styles.themeButton} onClick={toggleTheme}>
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    );
  };

  const params = useParams();

  const currentLang = params?.lang;

  return (
    <div className={styles.layoutWrapper}>
      <nav className={styles.navigation}>
        <div className="container">
          <div className={styles.navContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/title.jpeg"
                  alt="Marat Kuzakhmetov"
                  width={40}
                  height={40}
                  className={styles.logoImage}
                />
                <span>Marat Kuzakhmetov</span>
              </Link>
              <div className={styles.navLinks}>
                <Link href={generateNavLink(currentLang as string)} className={styles.navLink}>
                  {data.nav.home}
                </Link>
                <Link
                  href={generateNavLink(currentLang as string, 'about')}
                  className={styles.navLink}
                >
                  {data.nav.about}
                </Link>
                <Link
                  href={generateNavLink(currentLang as string, 'projects')}
                  className={styles.navLink}
                >
                  {data.nav.projects}
                </Link>
              </div>
            </div>
            <div className={styles.controls}>
              <div className={`${styles.languageControls} language-controls`}>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`${styles.languageButton} ${currentLang === lang.code ? styles.active : ''}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              {renderThemeChanger()}
              <BurgerMenu data={data} />
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainContent}>{children}</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>{data.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};
