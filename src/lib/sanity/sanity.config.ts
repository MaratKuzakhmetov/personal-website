import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'empty',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
};

export const sanityClient = createClient(config);
