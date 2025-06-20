import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

import { getCurrentYear } from '@/utils/getCurrentYear';

interface FooterProps {
  data: any;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = getCurrentYear();
  const copyright = `© ${currentYear} ${data.copyrightText}`;
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          {data.socialLinks &&
            data.socialLinks.map(link => (
              <Link key={link.platform} href={link.url} target="_blank">
                {link.platform}
              </Link>
            ))}
        </div>
        <div className={styles.copyright}>
          <p className={styles.footerText}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
