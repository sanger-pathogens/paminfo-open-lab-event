<!------------ EXERCISE ONE ------------>
<script>
  import { file_format } from "./constant_store.svelte";
</script>

{#each file_format as file}
  <div>{file.file_name}</div>
{/each}
