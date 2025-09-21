export const generateNavLink = (lang: string = 'en', path: string = '') => {
  return path ? `/${lang}/${path}` : `/${lang}`;
};
