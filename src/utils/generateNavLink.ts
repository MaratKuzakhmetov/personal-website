import { Languages } from '@/types/DataTypes';
import { DEFAULT_LANGUAGE } from '@/utils/constants';

export const generateNavLink = (lang: Languages = DEFAULT_LANGUAGE, path: string = '') => {
  return path ? `/${lang}/${path}` : `/${lang}`;
};
