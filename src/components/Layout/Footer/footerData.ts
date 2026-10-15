import { Languages } from '@/types/DataTypes';

interface FooterLangData {
  socialTitle: string;
  legalTitle: string;
  legalLinks: Array<{ path: string; title: string }>;
}

export const footerData: Record<Languages, FooterLangData> = {
  ru: {
    socialTitle: 'Соцсети',
    legalTitle: 'Правовая информация',
    legalLinks: [
      { path: 'impressum', title: 'Impressum' },
      { path: 'privacy', title: 'Конфиденциальность' },
    ],
  },
  en: {
    socialTitle: 'Social',
    legalTitle: 'Legal',
    legalLinks: [
      { path: 'impressum', title: 'Impressum' },
      { path: 'privacy', title: 'Privacy Policy' },
    ],
  },
  de: {
    socialTitle: 'Social',
    legalTitle: 'Rechtliches',
    legalLinks: [
      { path: 'impressum', title: 'Impressum' },
      { path: 'privacy', title: 'Datenschutz' },
    ],
  },
};
