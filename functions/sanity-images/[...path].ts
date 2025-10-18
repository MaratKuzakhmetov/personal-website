/// <reference types="@cloudflare/workers-types" />

interface Env {
  SANITY_PROJECT_ID: string;
  SANITY_DATASET: string;
}

export const onRequest: PagesFunction<Env> = async context => {
  const { request, params, env } = context;
  const { path } = params as { path: string };

  const sanityBase = `https://cdn.sanity.io/images/${env.SANITY_PROJECT_ID}/${env.SANITY_DATASET}`;
  const sanityUrl = `${sanityBase}/${path}`;

  const cache = (caches as CacheStorage & { default: Cache }).default;
  const cacheKey = new Request(request.url, request);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const res = await fetch(sanityUrl, {
    headers: { 'User-Agent': 'Cloudflare Worker Image Proxy' },
  });

  const response = new Response(res.body, res);
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  context.waitUntil(cache.put(cacheKey, response.clone()));

  return response;
};
