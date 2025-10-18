import { sanityClient } from '../sanity.config';
import { imageFragment } from '../fragments/imageFragment';

export async function getMainPageByLang(lang: string) {
  const id = `mainPage-${lang}`;

  return await sanityClient.fetch(
    `*[_type == "mainPage" && _id == $id][0]{
          _id,
          mainTitle,
          mainText,
          contentBlocks[]->{
            _id,
            title,
            slug,
            content
          },
          seo {
            title,
            description,
            shareUrl,
            image {
            ${imageFragment}
            }
          }
        }`,
    { id }
  );
}
