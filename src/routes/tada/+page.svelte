<script>
  import { file_format } from "../constant_store.svelte";

  let text = "World";

  function helloAlert() {
    // template literal
    alert(`Hello ${text}`);
  }
</script>

<h2>Solutions :)</h2>

<!-- EXERCISE ONE -->
<div>
  1. Onclick event
  <h5>
    <li>
      Create a button which displays a "Hello World" message each time the
      button gets clicked (either as via console log or alert)<br />
    </li>
    <li>
      Change the style of your button: e.g. make the background black/the text
      white
    </li>
  </h5>
  <h3>
    <button on:click={helloAlert}>Button</button>
  </h3>
  <br />
  <!-- END -->

  <!-- EXERCISE TWO -->

  2. Fix the bug<br />
  <h5>
    A 'file_format' object is being imported from `./constant_store.svelte`, but
    is not properly displaying its "name" property value. Find out why, and fix
    the issue.
    <h4>
      {#each file_format as file}
        <div>{file.Name}</div>
      {/each}
    </h4>
  </h5>

  <!-- END -->

  <!-- EXERCISE THREE -->
  <div>
    3. Create and Populate a table

    <h5>
      Using the same imported `file_format` object, display all of its property
      in a table
    </h5>

    <table>
      <tr>
        {#each Object.keys(file_format[0]) as column_name}
          <th>{column_name}</th>
        {/each}
      </tr>

      {#each Object.values(file_format) as row_value}
        <tr>
          {#each Object.values(row_value) as value}
            <td>{value}</td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
</div>

<!-- END -->
<style>
  button {
    background-color: rgb(0, 0, 0);
    color: white;
  }
</style>
