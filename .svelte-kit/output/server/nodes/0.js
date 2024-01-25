

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5d57774e.js","_app/immutable/chunks/index.7db445bd.js"];
export const stylesheets = ["_app/immutable/assets/0.348658bb.css"];
export const fonts = [];
