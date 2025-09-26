import React from 'react';
import { Layout } from '@/components/Layout';
import { MainPage } from '@/components/Pages/MainPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';

export interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Home(props: LangPageProps) {
  const params = await props.params;
  const { lang } = params;

  const [mainBlocks, globalSettings] = await Promise.all([
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  return (
    <Layout globalSettings={globalSettings}>
      <MainPage data={mainBlocks} />
    </Layout>
  );
}
