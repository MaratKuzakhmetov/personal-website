import { sanityClient } from '../sanity.config';

export async function getContentBlocksByLang(lang: string) {
  const typeMap: Record<string, string> = {
    en: 'contentBlockEn',
    ru: 'contentBlockRu',
    de: 'contentBlockDe',
  };

  const blockType = typeMap[lang] || typeMap['en'];

  return await sanityClient.fetch(
    `*[_type == $type] | order(title asc){
        _id,
        title,
        slug,
        content
      }`,
    { type: blockType }
  );
}
