import React from 'react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { defaultLang, languages } from '@/lib/i18n/settings';
import { notFound } from 'next/navigation';
import { Layout } from '../../components/Layout';
import { MainPage } from '@/components/Pages/MainPage';

type paramsType = Promise<{ lang: string }>;

export default async function Home(props: { params: paramsType }) {
  const { lang } = await props.params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang);

  return (
    <Layout data={dict}>
      <MainPage data={dict} />
    </Layout>
  );
}
