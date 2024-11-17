<script>
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import Separator from "./Separator.svelte";

  export let skills;
</script>

<Container size="full" direction="column" align="start">
  <h2>Skills</h2>
  <Divider />
  <Separator size="sm" />
  <div class="scroll-container">
    {#each skills as { category, items } (category)}
      <div class="skill-container">
        <h3>{category}</h3>
        <ul>
          {#each items as item}
            <li>{item}</li>
            <Separator size="sm" />
          {/each}
        </ul>
      </div>
      <Separator size="lg" />
    {/each}
  </div>
  <Separator />
</Container>

<style>
  ul {
    padding-left: 2rem;
  }
  .scroll-container {
    flex: 1;
    width: 100%;
    overflow-x: auto;
    display: flex;
  }
  .skill-container {
    flex-shrink: 0;
  }
</style>
