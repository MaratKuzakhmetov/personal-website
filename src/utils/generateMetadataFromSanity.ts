import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SUPPORTED_LANGUAGES } from '@/utils/constants';

interface WithSeo {
  seo?: {
    title?: string;
    description?: string;
    shareUrl?: string;
    image?: {
      asset?: { url?: string };
    };
  };
}

export async function generateMetadataFromSanity<T extends WithSeo>(
  lang: string,
  fetcher: (lang: string) => Promise<T | null>
): Promise<Metadata> {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const data = await fetcher(lang);
  const seo = data?.seo;

  return {
    title: seo?.title ?? 'Default title',
    description: seo?.description ?? 'Default description',
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      images: seo?.image?.asset?.url ? [{ url: seo.image.asset.url }] : undefined,
      locale: lang,
      url: seo?.shareUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.title,
      description: seo?.description,
      images: seo?.image?.asset?.url ? [seo.image.asset.url] : undefined,
    },
  };
}
