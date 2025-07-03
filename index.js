import { getAsset } from '@cloudflare/kv-asset-handler';
import manifest from '__STATIC_CONTENT_MANIFEST';

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAsset(request, {
        ASSET_NAMESPACE: __STATIC_CONTENT,
        ASSET_MANIFEST: manifest
      });
    } catch (err) {
      return new Response("Not found", { status: 404 });
    }
  }
};
