import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

import { getCurrentYear } from '@/utils/getCurrentYear';
import { FooterTypes, Languages } from '@/types/DataTypes';
import { generateNavLink } from '@/utils/generateNavLink';

import { footerData } from './footerData';

interface FooterProps {
  data: FooterTypes;
  lang: Languages;
}

export const Footer: React.FC<FooterProps> = ({ data, lang }) => {
  const t = footerData[lang] ?? footerData.en;
  const currentYear = getCurrentYear();
  const copyright = `© ${currentYear} ${data.copyrightText}`;
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.columns}>
          {data.socialLinks && data.socialLinks.length > 0 && (
            <nav className={styles.column} aria-label={t.socialTitle}>
              <h2 className={styles.columnTitle}>{t.socialTitle}</h2>
              <ul className={styles.linkList}>
                {data.socialLinks.map(link => (
                  <li key={link.platform}>
                    <Link href={link.url} target="_blank" className={styles.link}>
                      {link.platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <nav className={styles.column} aria-label={t.legalTitle}>
            <h2 className={styles.columnTitle}>{t.legalTitle}</h2>
            <ul className={styles.linkList}>
              {t.legalLinks.map(link => (
                <li key={link.path}>
                  <Link href={generateNavLink(lang, link.path)} className={styles.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p className={styles.footerText}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
