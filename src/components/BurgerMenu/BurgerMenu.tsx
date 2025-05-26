import { useState, useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BurgerButton, MenuOverlay, MenuItem, LanguageControls, LanguageButton } from './style';

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

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'de', name: 'DE' },
  ];

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavigation = useCallback(
    async (href: string) => {
      handleClose();
      await router.push(href);
    },
    [handleClose, router]
  );

  const changeLanguage = useCallback(
    (lang: string) => {
      handleClose();
      router.push(router.pathname, router.asPath, { locale: lang });
    },
    [handleClose, router]
  );

  return (
    <>
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <AnimatePresence mode="wait">
        {isOpen && (
          <MenuOverlay initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <MenuItem variants={menuItemVariants} onClick={() => handleNavigation('/')}>
              <Link href="/" onClick={e => e.preventDefault()}>
                {t('nav.home')}
              </Link>
            </MenuItem>
            <MenuItem variants={menuItemVariants} onClick={() => handleNavigation('/about')}>
              <Link href="/about" onClick={e => e.preventDefault()}>
                {t('nav.about')}
              </Link>
            </MenuItem>
            <MenuItem variants={menuItemVariants} onClick={() => handleNavigation('/projects')}>
              <Link href="/projects" onClick={e => e.preventDefault()}>
                {t('nav.projects')}
              </Link>
            </MenuItem>
            <LanguageControls variants={menuItemVariants}>
              {languages.map(lang => (
                <LanguageButton
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={router.locale === lang.code ? 'active' : ''}
                >
                  {lang.name}
                </LanguageButton>
              ))}
            </LanguageControls>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
