import { getDictionary } from '@/lib/i18n/dictionaries';
import { languages, defaultLang } from '@/lib/i18n/settings';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { ProjectPage } from '@/components/Pages/ProjectPage';

type paramsType = Promise<{ lang: string }>;

export default async function Home(props: { params: paramsType }) {
  const { lang } = await props.params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang || defaultLang);

  return (
    <Layout data={dict}>
      <ProjectPage data={dict} />
    </Layout>
  );
}
