<script>
  import { file_format } from "../constant_store.svelte";

  let text = "World";

  function helloAlert() {
    // template literal
    alert(`Hello ${text}`);
  }

  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected;

  let answer = "";

  function handleSubmit() {
    alert(`You answered to question ${selected.id}:
    Q: ${selected.text} 
    A: "${answer}"`);
  }
</script>

<h2>Solutions :)</h2>

<div>
  1. Onclick event
  <h5>
    <li>Create a button which displays a "Hello World" message each time the button
    gets clicked (either as via console log or alert)<br /></li>
    <li>Change the style of
    your button: e.g. make the background black/the text white</li>
  </h5>
  <h3>
    <button on:click={helloAlert}>Button</button>
  </h3>
  <br />
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

  <div>
    3. Create and Populate a table

    <h5>
      Using the same imported `file_format` object, display all of its property
      in a table
    </h5>

    <!-- HINT: use a simple HTML table structure
            a table style is already provided at the bottom of this file -->

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

<!-- 
<div>
<h2>Option box</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected} on:change={() => (answer = '')}>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit"> Submit </button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>
</div>
 -->
<style>
  button {
    background-color: rgb(0, 0, 0);
    color: white;
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
  input {
    display: block;
    width: 500px;
    max-width: 100%;
  }
</style>
