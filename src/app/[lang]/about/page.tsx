import { Layout } from '@/components/Layout';
import { AboutPage } from '@/components/Pages/AboutPage';
import { getContentBlocksByLang } from '@/lib/sanity/queries/contentBlocks';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';
import { SlugType } from '@/types/DataTypes';
import { SUPPORTED_LANGUAGES } from '@/utils/constants';
import { notFound } from 'next/navigation';
import { generateMetadataFromSanity } from '@/utils/generateMetadataFromSanity';

export interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return generateMetadataFromSanity(params.lang, getContentBlocksByLang);
}

export default async function Home(props: LangPageProps) {
  const params = await props.params;
  const { lang } = params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

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
