/// <reference types="@cloudflare/workers-types" />

declare const caches: CacheStorage & {
  /** Cloudflare Workers edge cache */
  default: Cache;
};
