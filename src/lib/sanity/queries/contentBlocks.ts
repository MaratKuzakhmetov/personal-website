import { sanityClient } from '../sanity.config';
import { imageFragment } from '../fragments/imageFragment';

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
        content[]{
          ...,
          _type == "image" => {
            _type,
            _key,
            ${imageFragment}
          },
          _type == "subBlock" => {
            ...,
            blockContent[]{
              ...,
              _type == "image" => {
                _type,
                _key,
                ${imageFragment}
              }
            }
          }
        }
      }`,
    { type: blockType }
  );
}
