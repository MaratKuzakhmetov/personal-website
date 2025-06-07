import React from 'react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { defaultLang, languages } from '@/lib/i18n/settings';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { MainPage } from '@/components/Pages/MainPage';
import { getContentBlocksByLang, getMainPageByLang } from '@/lib/sanity/queries';

type Params = { lang: string };

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang);
  const contentBlocks = await getContentBlocksByLang(lang);
  const mainBlocks = await getMainPageByLang(lang);

  console.log(contentBlocks);
  console.log(mainBlocks);

  return (
    <Layout data={dict}>
      <MainPage data={dict} />
    </Layout>
  );
}
