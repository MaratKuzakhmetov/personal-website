import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { config } from './sanity.config';

const builder = imageUrlBuilder(createClient(config));

export function urlFor(source: any) {
  return builder.image(source);
}
