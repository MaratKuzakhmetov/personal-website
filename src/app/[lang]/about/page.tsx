import { getDictionary } from '@/lib/i18n/dictionaries'; // TODO: to remove i18n
import { languages, defaultLang } from '@/lib/i18n/settings'; // TODO: to remove i18n
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/components/Pages/AboutPage';
import { getMainPageByLang } from '@/lib/sanity/queries/mainPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';
import { SlugType } from '@/types/DataTypes';

type paramsType = Promise<{ lang: string }>;

export default async function Home(props: { params: paramsType }) {
  const { lang } = await props.params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang); //TODO: to remove i18n
  const [contentBlocks, mainBlocks, globalSettings] = await Promise.all([
    getContentBlocksByLang(lang),
    getMainPageByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  const contentAbout = contentBlocks.find(
    (block: { slug: SlugType }) => block.slug.current === 'about'
  );

  return (
    <Layout data={dict} globalSettings={globalSettings}>
      <AboutPage data={contentAbout} />
    </Layout>
  );
}
