import { DataTypes } from '@/types/DataTypes';

const dictionaries: Record<string, () => Promise<DataTypes>> = {
  en: () => import('./locales/en/common.json').then(module => module.default as DataTypes),
  ru: () => import('./locales/ru/common.json').then(module => module.default as DataTypes),
  de: () => import('./locales/de/common.json').then(module => module.default as DataTypes),
};

export const getDictionary = async (lang: string) => {
  return dictionaries[lang] ? await dictionaries[lang]() : await dictionaries.en();
};
