export const generateNavLink = (lang: 'en' | 'de' = 'en', path: string = '') => {
  return path ? `/${lang}/${path}` : `/${lang}`;
};
