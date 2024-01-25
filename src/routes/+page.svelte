<!--suppress ALL -->
<script>
  import { file_format } from "./constant_store.svelte";
</script>

<h2>Welcome to your interactive Software Developer workshop!</h2>
<p>Click on each section to view instructions/hints</p>

<div>
  <details>
    <summary>1. On-click event </summary>
    <li>
      Create a button which displays a "Hello World" message each time the
      button gets clicked (either as via console log or alert)
    </li>
    <li>
      Change the style of your button: e.g. make the background black/the text
      white
    </li>
    <br />
    Hint: if stuck, check this
    <a
      href="https://svelte.dev/repl/f9e5429cd9d343179a44478587a11747?version=3.49.0"
      target="_blank"
      rel="noreferrer">SVELTE.DEV example</a
    >
  </details>

  <h3>
    <!-- EX1: YOUR CODE GOES HERE!! -->

    <button>Button</button>

    <!-- ------------------ END     -->
  </h3>

  <details>
    <summary>2. Fix the bug<br /></summary>
    <li>
      A <i>file_format</i> object is being imported from
      <i>./constant_store.svelte</i>, but is not its '<i>name</i>' property
      values properly. Find out why and fix it.
    </li>
    <br />

    Hint: look carefully at the object properties
  </details>

  <h3>
    <!-- EX2:  FIX THE CODE BELOW     -->
    {#each file_format as file}
      <div>{file.file_name}</div>
    {/each}
    <!-- ------------------ END -->
  </h3>

  <details>
    <summary>3. Create and Populate a table</summary>
    <li>
      Using the imported <i>file_format</i> object, display all of the object properties
      in a table. Note that the style for the table element has already been provided
      at the bottom of this file.
    </li>
    <br />
    Hint: in case you have never built a table in HTML, please check
    <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics" target="_blank" rel="noreferrer"
      >this page</a
    >
  </details>

  <!--EX3: HINT: use a simple HTML table structure;

        YOUR CODE GOES HERE!!

      ------------------ END -->
      
</div>

<style>
  p {
    margin-top: 0rem;
  }
  table,
  th,
  td {
    max-width: 60rem;
    border: 1px solid;
    border-collapse: collapse;
    margin-bottom: 10px;
    align-content: center;
  }
</style>
