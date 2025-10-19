import React from 'react';
import { Layout } from '@/components/Layout';
import { MainPage } from '@/components/Pages/MainPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';
import { SUPPORTED_LANGUAGES } from '@/utils/constants';
import { notFound } from 'next/navigation';
import { generateMetadataFromSanity } from '@/utils/generateMetadataFromSanity';
import { Languages } from '@/types/DataTypes';

export const runtime = 'edge';

export async function generateMetadata(props: LangPageProps) {
  const params = await props.params;
  const { lang } = params;
  const data = await getMainPageByLang(lang);
  const seo = data?.seo;
  return generateMetadataFromSanity(seo, lang);
}

export interface LangPageProps {
  params: Promise<{
    lang: Languages;
  }>;
}

export default async function Home(props: LangPageProps) {
  const params = await props.params;
  const { lang } = params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const [mainBlocks, globalSettings] = await Promise.all([
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  return (
    <Layout globalSettings={globalSettings} lang={lang}>
      <MainPage data={mainBlocks} />
    </Layout>
  );
}
