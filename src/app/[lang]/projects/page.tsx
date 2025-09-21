import { getDictionary } from '@/lib/i18n/dictionaries';
import { languages, defaultLang } from '@/lib/i18n/settings';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/components/Pages/AboutPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';

type paramsType = Promise<{ lang: string }>;

export default async function Home(props: { params: paramsType }) {
  const { lang } = await props.params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang);
  const [contentBlocks, mainBlocks, globalSettings] = await Promise.all([
    getContentBlocksByLang(lang),
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  return (
    <Layout data={dict} globalSettings={globalSettings}>
      <AboutPage data={dict} />
    </Layout>
  );
}
