import { serveStatic } from 'wrangler/static-content';

export default {
  async fetch(request, env, ctx) {
    return serveStatic(request);
  },
};
