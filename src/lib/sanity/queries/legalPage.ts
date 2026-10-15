import { sanityClient } from '../sanity.config';

export type LegalPageKey = 'impressum' | 'privacy';

export async function getLegalPageByLang(lang: string, key: LegalPageKey) {
  const id = `globalSettings-${lang}`;

  return await sanityClient.fetch(
    `*[_type == "globalSettings" && _id == $id][0]{
        "title": ${key}.title,
        "content": ${key}.content
      }`,
    { id }
  );
}
