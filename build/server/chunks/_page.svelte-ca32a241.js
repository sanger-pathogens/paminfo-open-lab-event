import { c as create_ssr_component, b as add_attribute, d as each, e as escape } from './index-73e30d40.js';

const file_format = [
  {
    "Name": "FASTA",
    "Extension": ".fasta",
    "Description": "Text file for representing nucleotide or amino acid sequences of nucleic acids and proteins."
  },
  {
    "Name": "FASTQ",
    "Extension": ".fastq",
    "Description": "Raw reads obtained from the sequencer"
  },
  {
    "Name": "BAM",
    "Extension": ".bam",
    "Description": "Binary Alignment/Map"
  },
  {
    "Name": "SAM",
    "Extension": ".sam",
    "Description": "Sequence Alignment Map"
  },
  {
    "Name": "VCF",
    "Extension": ".vcf",
    "Description": "Variant Calling Format/File"
  },
  {
    "Name": "GFF",
    "Extension": ".gff",
    "Description:": "General Feature Format or Gene Finding Format"
  }
];
const css = {
  code: "button.svelte-1x68pgp{background-color:rgb(0, 0, 0);color:white}table.svelte-1x68pgp,th.svelte-1x68pgp,td.svelte-1x68pgp{max-width:60rem;border:1px solid;border-collapse:collapse;margin-bottom:10px;align-content:center}",
  map: null
};
function sayHello() {
  alert("Hello World");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Welcome to your front-end test!</h2>

<div>1. Make the button prompt an &quot;Hello World&quot; alert on click.


  <button${add_attribute("onclick", sayHello(), 0)} class="${"svelte-1x68pgp"}">Button</button>


  2. Fix the bug<br>
  <h5>A &#39;file_format&#39; object is being imported from \`./constant_store.svelte\`.
    Fix displaying the &quot;Name&quot; property values of the object
    <h4>${each(file_format, (file) => {
    return `<div>${escape(file.name)}</div>
        `;
  })}</h4></h5>

  <div>3. Create and Populate a table

    <h5>Using the same imported \`file_format\` object, display all of its property in
      a table
    </h5>

    

    <table class="${"svelte-1x68pgp"}"><tr>${each(Object.keys(file_format[0]), (column_name) => {
    return `<th class="${"svelte-1x68pgp"}">${escape(column_name)}</th>`;
  })}</tr>

      ${each(Object.values(file_format), (row_value) => {
    return `<tr>${each(Object.values(row_value), (value) => {
      return `<td class="${"svelte-1x68pgp"}">${escape(value)}</td>`;
    })}
        </tr>`;
  })}</table></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ca32a241.js.map
