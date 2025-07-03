import { getAsset } from "@cloudflare/kv-asset-handler";
import manifest from "__STATIC_CONTENT_MANIFEST";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`Serving path: ${url.pathname}`);  // ✅ debugging

    try {
      return await getAsset(request, {
        ASSET_NAMESPACE: __STATIC_CONTENT,
        ASSET_MANIFEST: manifest,
      });
    } catch (err) {
      console.error("Asset not found:", url.pathname);
      return new Response("Not found", { status: 404 });
    }
  },
};
