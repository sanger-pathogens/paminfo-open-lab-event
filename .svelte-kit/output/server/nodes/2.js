

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bded0fe3.js","_app/immutable/chunks/index.7db445bd.js","_app/immutable/chunks/constant_store.61a5c60c.js"];
export const stylesheets = ["_app/immutable/assets/2.e1c19f0c.css"];
export const fonts = [];
