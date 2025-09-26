import { Layout } from '@/components/Layout';
import { AboutPage } from '@/components/Pages/AboutPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';
import { SlugType } from '@/types/DataTypes';

export interface LangPageProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params }: LangPageProps) {
  const { lang } = params;

  const [contentBlocks, globalSettings] = await Promise.all([
    getContentBlocksByLang(lang),
    getGlobalSettingsByLang(lang),
  ]);

  const contentAbout = contentBlocks.find(
    (block: { slug: SlugType }) => block.slug.current === 'about'
  );

  return (
    <Layout globalSettings={globalSettings}>
      <AboutPage data={contentAbout} />
    </Layout>
  );
}
