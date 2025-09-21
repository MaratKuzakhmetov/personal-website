import React from 'react';
import { getDictionary } from '@/lib/i18n/dictionaries'; // TODO: to remove i18n
import { defaultLang, languages } from '@/lib/i18n/settings'; // TODO: to remove i18n
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { MainPage } from '@/components/Pages/MainPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';

export interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Home({ params }: LangPageProps) {
  const { lang } = await params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang); // TODO: to remove i18n
  const [contentBlocks, mainBlocks, globalSettings] = await Promise.all([
    getContentBlocksByLang(lang),
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  return (
    <Layout data={dict} globalSettings={globalSettings}>
      <MainPage data={mainBlocks} />
    </Layout>
  );
}
