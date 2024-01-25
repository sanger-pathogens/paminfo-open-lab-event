

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/solutions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f266bf03.js","_app/immutable/chunks/index.7db445bd.js","_app/immutable/chunks/constant_store.61a5c60c.js"];
export const stylesheets = ["_app/immutable/assets/3.a8746df8.css"];
export const fonts = [];
