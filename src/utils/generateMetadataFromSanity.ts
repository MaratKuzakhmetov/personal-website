import type { Metadata } from 'next';
import { Seo } from '@/types/DataTypes';

export async function generateMetadataFromSanity(data: Seo, lang: string): Promise<Metadata> {
  const imageUrl = data?.image?.src?.replace(
    'https://cdn.sanity.io/images/srmsnwov/production',
    'https://markgp.com/sanity-images'
  );

  return {
    title: data?.title ?? 'Default title',
    description: data?.description ?? 'Default description',
    openGraph: {
      title: data?.title,
      description: data?.description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
      locale: lang,
      url: data?.shareUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.title,
      description: data?.description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: data?.shareUrl,
    },
  };
}
