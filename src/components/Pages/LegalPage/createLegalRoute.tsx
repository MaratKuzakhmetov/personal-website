import { notFound } from 'next/navigation';

import { Layout } from '@/components/Layout';
import { getGlobalSettingsByLang } from '@/lib/sanity/queries/globalSettings';
import { getLegalPageByLang, LegalPageKey } from '@/lib/sanity/queries/legalPage';
import { Languages } from '@/types/DataTypes';
import { SUPPORTED_LANGUAGES } from '@/utils/constants';

import { LegalPage } from './LegalPage';

export interface LegalRouteProps {
  params: Promise<{
    lang: Languages;
  }>;
}

export function createLegalRoute(key: LegalPageKey, fallbackTitle: string) {
  async function generateMetadata(props: LegalRouteProps) {
    const { lang } = await props.params;
    const data = await getLegalPageByLang(lang, key);

    return {
      title: data?.title ?? fallbackTitle,
      robots: { index: false, follow: true },
    };
  }

  async function Page(props: LegalRouteProps) {
    const { lang } = await props.params;

    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      notFound();
    }

    const [data, globalSettings] = await Promise.all([
      getLegalPageByLang(lang, key),
      getGlobalSettingsByLang(lang),
    ]);

    if (!data?.content) {
      notFound();
    }

    return (
      <Layout globalSettings={globalSettings} lang={lang}>
        <LegalPage data={data} />
      </Layout>
    );
  }

  return { generateMetadata, Page };
}
