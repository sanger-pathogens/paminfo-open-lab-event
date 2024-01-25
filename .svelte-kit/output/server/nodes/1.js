

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e7985819.js","_app/immutable/chunks/index.7db445bd.js","_app/immutable/chunks/singletons.ac08fd34.js"];
export const stylesheets = [];
export const fonts = [];
