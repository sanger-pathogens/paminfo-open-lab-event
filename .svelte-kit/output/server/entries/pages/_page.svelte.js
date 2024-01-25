import { c as create_ssr_component, d as each, e as escape } from "../../chunks/index.js";
import { f as file_format } from "../../chunks/constant_store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1qqbtf6{margin-top:0rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `


<h2>Welcome to your interactive Software Developer workshop!</h2>
<p class="${"svelte-1qqbtf6"}">Click on each section to view instructions/hints</p>

<div><details><summary>1. On-click event </summary>
    <li>Create a button which displays a &quot;Hello World&quot; message each time the
      button gets clicked (either as via console log or alert)
    </li>
    <li>Change the style of your button: e.g. make the background black/the text
      white
    </li>
    <br>
    Hint: if stuck, check this
    <a href="${"https://svelte.dev/repl/f9e5429cd9d343179a44478587a11747?version=3.49.0"}" target="${"_blank"}" rel="${"noreferrer"}">SVELTE.DEV example</a></details>

  <h3>

    <button>Button</button>

    </h3>

  <details><summary>2. Fix the bug<br></summary>
    <li>A <i>file_format</i> object is being imported from
      <i>./constant_store.svelte</i>, but is not its &#39;<i>name</i>&#39; property
      values properly. Find out why and fix it.
    </li>
    <br>

    Hint: look carefully at the object properties
  </details>

  <h3>
    ${each(file_format, (file) => {
    return `<div>${escape(file.file_name)}</div>`;
  })}
    </h3>

  <details><summary>3. Create and Populate a table</summary>
    <li>Using the imported <i>file_format</i> object, display all of the object properties
      in a table. Note that the style for the table element has already been provided
      at the bottom of this file.
    </li>
    <br>
    Hint: in case you have never built a table in HTML, please check
    <a href="${"https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics"}" target="${"_blank"}" rel="${"noreferrer"}">this page</a></details>

  
      
</div>`;
});
export {
  Page as default
};
