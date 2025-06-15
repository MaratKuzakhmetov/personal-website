import { sanityClient } from '../sanity.config';
import { imageFragment } from '../fragments/imageFragment';

export async function getGlobalSettingsByLang(lang: string) {
  const id = `globalSettings-${lang}`;

  return await sanityClient.fetch(
    `*[_type == "globalSettings" && _id == $id][0]{
        header {
          logo { ${imageFragment} },
          navigation[]{
            label,
            link
          }
        },
        footer {
          logo { ${imageFragment} },
          description,
          socialLinks[]{
            platform,
            url
          },
          copyrightText
        }
      }`,
    { id }
  );
}
