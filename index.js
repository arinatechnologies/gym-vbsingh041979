export default {
  async fetch(request, env, ctx) {
    return new Response("Static site deployed successfully.");
  }
};
