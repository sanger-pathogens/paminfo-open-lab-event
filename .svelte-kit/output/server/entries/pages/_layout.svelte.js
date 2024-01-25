import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1yzmaou{background:var(--color-purple);padding:0rem 1rem;overflow-y:auto;position:relative;max-width:100%}h1.svelte-1yzmaou{margin-top:0;position:absolute;left:50%;transform:translateX(-50%)}a.svelte-1yzmaou{color:white}nav.svelte-1yzmaou{display:flex;align-items:center;flex-wrap:wrap;margin:auto;min-height:6rem;max-width:var(--breakpoint-xl)}.pam_logo.svelte-1yzmaou{max-width:15rem;margin-top:1.9rem}@media(max-width: 1000px){h1.svelte-1yzmaou{left:32%;margin-top:0.4rem}.pam_logo.svelte-1yzmaou{padding:0.5rem;transform:scale(0.7)}nav.svelte-1yzmaou{min-width:44rem}}@media(max-width: 550px){h1.svelte-1yzmaou{left:40%}nav.svelte-1yzmaou{min-width:36rem}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-1yzmaou"}"><h1 class="${"svelte-1yzmaou"}"><a href="${"/"}" class="${"svelte-1yzmaou"}"><img class="${"pam_logo svelte-1yzmaou"}" src="${"/imgs/paminfo.png"}" alt="${"PaM Informatics"}" title="${"PaM Informatics - FE test"}"></a></h1>
  <nav class="${"svelte-1yzmaou"}"></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-5wi3e.svelte-5wi3e{display:flex;justify-content:space-around;background:var(--color-purple);color:white;margin-top:auto;padding:1.4rem 1.4rem 1.8rem}.max-inner-width.svelte-5wi3e.svelte-5wi3e{display:flex;align-items:center;flex-wrap:nowrap;max-width:var(--breakpoint-xl);width:100%}a.svelte-5wi3e.svelte-5wi3e{color:white}.sanger-link.svelte-5wi3e.svelte-5wi3e{order:-1;margin-right:auto;padding-right:0.6rem}.sanger-link.svelte-5wi3e img.svelte-5wi3e{width:7.3rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-5wi3e"}"><div class="${"max-inner-width svelte-5wi3e"}"></div>

  <a href="${"https://www.sanger.ac.uk/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"sanger-link svelte-5wi3e"}"><img alt="${"Wellcome Sanger Institute"}" src="${"/imgs/sangerlogowhite.svg"}" title="${"Wellcome Sanger Institute"}" class="${"svelte-5wi3e"}"></a>
</footer>`;
});
const base = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--color-indigo:#484885;--color-purple:#43455c;--color-danger:#e66969;--color-link-visited:#663399;--color-table-alt-row:#f8f8f8;--color-table-hover-row:#f0f0f0;--breakpoint-xl:1400px;--width-main:98vw;--width-reading:50rem;--multiItemBG:var(--background)}main.svelte-a8yad9{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;margin:2rem auto;padding-left:0.6rem;padding-right:0.6rem;width:var(--width-main);max-width:100%}\n      .dropdown-menu-trigger:not(:hover):not(:focus)\n        + .dropdown-menu-items:not(:hover):not(:focus-within)\n    {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}[role="dialog"] .content > h1,[role="dialog"] .content > h2,[role="dialog"] .content > h3,[role="dialog"] .content > h4,[role="dialog"] .content > h5,[role="dialog"] .content > h6{font-size:1.1rem}.label-radio{display:inline-flex;flex-direction:column;margin-right:1rem}table.dense th{font-size:0.95rem;padding:0.5rem}table.dense td{font-size:0.95rem;line-height:1.2;padding:0.3rem}@media(min-width: 1278px){table.dense td{padding:0.5rem}}a[role="button"]:hover{text-decoration:none}button.compact,[role="button"].compact,input[type="button"].compact,input[type="submit"].compact{font-size:0.95rem;padding:0.5rem}.btn-wide{margin-left:auto;margin-right:auto;width:100%}button.primary,[role="button"].primary{background:var(--background-body);color:var(--color-indigo);border:1px solid var(--color-indigo);font-weight:300}button.danger,[role="button"].danger{color:var(--color-danger);border:1px solid var(--color-danger);font-weight:300}.icon-btn{border:none;margin-top:0.25rem;padding:0.3rem 0.3rem 0.1rem}.sr-only{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-a8yad9"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
