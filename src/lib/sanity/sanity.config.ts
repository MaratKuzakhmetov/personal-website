import { createClient } from 'next-sanity';

export const config = {
  projectId: 'srmsnwov',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
};

export const sanityClient = createClient(config);
