import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from '../Common/NavLink';
import { useRouter, usePathname } from 'next/navigation';
import styles from './BurgerMenu.module.css';
import { NavLangTypes, Languages } from '@/types/DataTypes';

import { makeClassName } from '@/utils/makeClassName';

import { LANGUAGES } from '@/utils/constants';
import { generateNavLink } from '@/utils/generateNavLink';

interface BurgerMenuProps {
  navData: NavLangTypes;
  currentLang: Languages;
}

const menuVariants = {
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      when: 'afterChildren',
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ navData, currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleNavigation = useCallback(
    (href: string) => {
      if (pathname === href) {
        setIsOpen(false);
        return;
      }

      router.push(href);
    },
    [router, pathname]
  );

  const changeLanguage = useCallback(
    (lang: string) => {
      const segments = pathname.split('/');
      segments[1] = lang;
      const newPath = segments.join('/');

      if (pathname === newPath) {
        setIsOpen(false);
        return;
      }
      router.push(newPath);
    },
    [pathname, router]
  );

  return (
    <>
      <button className={styles.burgerButton} data-open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div
              className={styles.menuItem}
              variants={menuItemVariants}
              onClick={() => handleNavigation(generateNavLink(currentLang, navData.home.link))}
            >
              <NavLink href={generateNavLink(currentLang, navData.home.link)}>
                {navData.home.title}
              </NavLink>
            </motion.div>
            <motion.div
              className={styles.menuItem}
              variants={menuItemVariants}
              onClick={() => handleNavigation(generateNavLink(currentLang, navData.about.link))}
            >
              <NavLink href={generateNavLink(currentLang, navData.about.link)}>
                {navData.about.title}
              </NavLink>
            </motion.div>
            <motion.div className={styles.languageControls} variants={menuItemVariants}>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
