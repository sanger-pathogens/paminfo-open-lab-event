import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as each } from './index-73e30d40.js';

const css$2 = {
  code: "header.svelte-42vdf5.svelte-42vdf5{background:var(--juno-purple);padding:0rem 1rem;overflow-y:auto;position:relative;max-width:100%}h1.svelte-42vdf5.svelte-42vdf5{margin-top:0;position:absolute;left:50%;transform:translateX(-50%)}a.svelte-42vdf5.svelte-42vdf5{color:white}nav.svelte-42vdf5.svelte-42vdf5{display:flex;align-items:center;flex-wrap:wrap;margin:auto;min-height:6rem;max-width:var(--breakpoint-xl)}nav.svelte-42vdf5 a.svelte-42vdf5{padding:0.6rem}.pam_logo.svelte-42vdf5.svelte-42vdf5{max-width:15rem;margin-top:1.5rem}.project-link.svelte-42vdf5.svelte-42vdf5{margin-right:auto;max-width:11vw}.project-link.svelte-42vdf5 img.svelte-42vdf5{width:4.5rem}@media(max-width: 1000px){h1.svelte-42vdf5.svelte-42vdf5{left:32%;margin-top:0.4rem}.pam_logo.svelte-42vdf5.svelte-42vdf5{padding:0.5rem;transform:scale(0.7)}nav.svelte-42vdf5.svelte-42vdf5{min-width:44rem}nav.svelte-42vdf5 a.svelte-42vdf5{font-size:0.95rem}}@media(max-width: 550px){h1.svelte-42vdf5.svelte-42vdf5{left:40%}nav.svelte-42vdf5.svelte-42vdf5{min-width:36rem}nav.svelte-42vdf5 a.svelte-42vdf5{padding-left:0.4rem;padding-right:0.4rem}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project = void 0 } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$2);
  return `<header class="${"svelte-42vdf5"}"><h1 class="${"svelte-42vdf5"}"><a href="${"/"}" class="${"svelte-42vdf5"}"><img class="${"pam_logo svelte-42vdf5"}" src="${"/imgs/paminfo.png"}" alt="${"PaM Informatics"}" title="${"PaM Informatics - FE test"}"></a></h1>
  <nav class="${"svelte-42vdf5"}">${project?.name ? `<a${add_attribute("href", project.project_url, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"project-link svelte-42vdf5"}">${project.logo_url ? `<img${add_attribute("alt", project.name, 0)}${add_attribute("src", project.logo_url, 0)}${add_attribute("title", project.name, 0)} class="${"svelte-42vdf5"}">` : `${escape(project.name)}`}</a>
      ${each(project.header_links || [], ({ label, url }) => {
    return `<a${add_attribute("href", url, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-42vdf5"}">${escape(label)}</a>`;
  })}` : ``}</nav>
</header>`;
});
const css$1 = {
  code: "footer.svelte-1j5dsbk.svelte-1j5dsbk{display:flex;justify-content:space-around;background:var(--juno-purple);color:white;margin-top:auto;padding:1.4rem 1.4rem 1.8rem}.max-inner-width.svelte-1j5dsbk.svelte-1j5dsbk{display:flex;align-items:center;flex-wrap:nowrap;max-width:var(--breakpoint-xl);width:100%}a.svelte-1j5dsbk.svelte-1j5dsbk{color:white}.project-release.svelte-1j5dsbk.svelte-1j5dsbk{margin-right:auto;padding-right:0.6rem}.sanger-link.svelte-1j5dsbk.svelte-1j5dsbk{order:-1;margin-right:auto;padding-right:0.6rem}.sanger-link.svelte-1j5dsbk img.svelte-1j5dsbk{width:7.3rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project = void 0 } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1j5dsbk"}"><div class="${"max-inner-width svelte-1j5dsbk"}"><div class="${"project-release svelte-1j5dsbk"}">${project?.release ? `${project?.name ? `${escape(project.name)} release` : `Release`}
        ${escape(project.release)}` : ``}</div>


    <a href="${"https://www.sanger.ac.uk/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"sanger-link svelte-1j5dsbk"}"><img alt="${"Wellcome Sanger Institute"}" src="${"/imgs/sangerlogowhite.svg"}" title="${"Wellcome Sanger Institute"}" class="${"svelte-1j5dsbk"}"></a></div>
</footer>`;
});
const css = {
  code: ':root{--juno-indigo:#484885;--juno-purple:#43455C;--color-danger:#e66969;--color-link-visited:#663399;--color-table-alt-row:#f8f8f8;--color-table-hover-row:#f0f0f0;--breakpoint-xl:1400px;--width-main:98vw;--width-reading:50rem;--multiItemBG:var(--background)}main.svelte-y3494b{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;margin:2rem auto;padding-left:0.6rem;padding-right:0.6rem;width:var(--width-main);max-width:100%}.dropdown-menu-trigger:not(:hover):not(:focus)\n      + .dropdown-menu-items:not(:hover):not(:focus-within){clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}[role="dialog"] .content > h1,[role="dialog"] .content > h2,[role="dialog"] .content > h3,[role="dialog"] .content > h4,[role="dialog"] .content > h5,[role="dialog"] .content > h6{font-size:1.1rem}.label-radio{display:inline-flex;flex-direction:column;margin-right:1rem}table.dense th{font-size:0.95rem;padding:0.5rem}table.dense td{font-size:0.95rem;line-height:1.2;padding:0.3rem}@media(min-width: 1278px){table.dense td{padding:0.5rem}}a[role="button"]:hover{text-decoration:none}button.compact,[role="button"].compact,input[type="button"].compact,input[type="submit"].compact{font-size:0.95rem;padding:0.5rem}.btn-wide{margin-left:auto;margin-right:auto;width:100%}button.primary,[role="button"].primary{background:var(--background-body);color:var(--juno-indigo);border:1px solid var(--juno-indigo);font-weight:300}button.danger,[role="button"].danger{color:var(--color-danger);border:1px solid var(--color-danger);font-weight:300}.icon-btn{border:none;margin-top:0.25rem;padding:0.3rem 0.3rem 0.1rem}.sr-only{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main class="${"svelte-y3494b"}">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d21ad9ff.js.map
