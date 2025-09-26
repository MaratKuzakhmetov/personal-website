import React from 'react';
import { Layout } from '@/components/Layout';
import { MainPage } from '@/components/Pages/MainPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';

export interface LangPageProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params }: LangPageProps) {
  console.log('params.lang =', params.lang);
  const { lang } = params;

  console.log('lang', lang);

  const [contentBlocks, mainBlocks, globalSettings] = await Promise.all([
    getContentBlocksByLang(lang),
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  return (
    <Layout globalSettings={globalSettings}>
      <MainPage data={mainBlocks} />
    </Layout>
  );
}
