import type { Metadata } from 'next';

interface WithSeo {
  title?: string;
  description?: string;
  shareUrl?: string;
  image?: {
    src?: string;
    alt?: string;
    dimensions?: { width: number; height: number };
  };
}

export async function generateMetadataFromSanity(data: WithSeo, lang: string): Promise<Metadata> {
  const imageUrl = data?.image?.src?.replace(
    'https://cdn.sanity.io/images/' +
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID +
      '/' +
      process.env.NEXT_PUBLIC_SANITY_DATASET,
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
  };
}
