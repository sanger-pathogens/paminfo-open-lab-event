import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index.js";
import { f as file_format } from "../../../chunks/constant_store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-wh7til{background-color:rgb(0, 0, 0);color:white}table.svelte-wh7til,th.svelte-wh7til,td.svelte-wh7til{max-width:60rem;border:1px solid;border-collapse:collapse;margin-bottom:10px;align-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Solutions :)</h2>

<div>1. Onclick event
  <h5><li>Create a button which displays a &quot;Hello World&quot; message each time the button
    gets clicked (either as via console log or alert)<br></li>
    <li>Change the style of
    your button: e.g. make the background black/the text white</li></h5>
  <h3><button class="${"svelte-wh7til"}">Button</button></h3>
  <br>
  2. Fix the bug<br>
  <h5>A &#39;file_format&#39; object is being imported from \`./constant_store.svelte\`, but
    is not properly displaying its &quot;name&quot; property value. Find out why, and fix
    the issue.
    <h4>${each(file_format, (file) => {
    return `<div>${escape(file.Name)}</div>`;
  })}</h4></h5>

  <div>3. Create and Populate a table

    <h5>Using the same imported \`file_format\` object, display all of its property
      in a table
    </h5>

    

    <table class="${"svelte-wh7til"}"><tr>${each(Object.keys(file_format[0]), (column_name) => {
    return `<th class="${"svelte-wh7til"}">${escape(column_name)}</th>`;
  })}</tr>

      ${each(Object.values(file_format), (row_value) => {
    return `<tr>${each(Object.values(row_value), (value) => {
      return `<td class="${"svelte-wh7til"}">${escape(value)}</td>`;
    })}
        </tr>`;
  })}</table></div></div>

`;
});
export {
  Page as default
};
