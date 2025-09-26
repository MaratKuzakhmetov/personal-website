'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';

import { BurgerMenu } from '@/components/BurgerMenu';

import { makeClassName } from '@/utils/makeClassName';

import Link from 'next/link';
import { NavLink } from '@/components/Common/NavLink';
import Image from 'next/image';
import { generateNavLink } from '@/utils/generateNavLink';
import styles from './Header.module.css';

import { LANGUAGES } from '@/utils/constants';
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher';

import { Languages } from '@/types/DataTypes';

import { headerData } from './headerData';

export const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const pathname = usePathname();

  const params = useParams();

  const currentLang = params?.lang as Languages;

  const navData = headerData[currentLang];

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header>
      <nav className={styles.navigation}>
        <div className="container">
          <div className={styles.navContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href={generateNavLink(currentLang, navData.home.link)} className={styles.logo}>
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
                <NavLink href={generateNavLink(currentLang, navData.home.link)}>
                  {navData.home.title}
                </NavLink>
                <NavLink href={generateNavLink(currentLang, navData.about.link)}>
                  {navData.about.title}
                </NavLink>
              </div>
            </div>
            <div className={styles.controls}>
              <div className={styles.languageControls}>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={makeClassName([
                      [styles.languageButton, true],
                      [styles.active, currentLang === lang.code],
                    ])}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <div className={styles.switcher}>
                <ThemeSwitcher />
              </div>
              <BurgerMenu navData={navData} currentLang={currentLang} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
