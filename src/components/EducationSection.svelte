<script>
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import Separator from "./Separator.svelte";

  export let education;
</script>

<Container size="full" direction="column" align="start">
  <h2>Education</h2>
  <Divider />
  <Separator size="sm" />
  {#each education as { school, degree, graduation } (school)}
    <Container justify="space-between" align="start">
      <div>
        <h3>{degree}</h3>
        <h4 class="school-name">{school}</h4>
      </div>
      <h4>{graduation}</h4>
    </Container>
    <Separator />
  {/each}
</Container>

<style>
  .school-name {
    font-style: italic;
    font-weight: 400;
  }
</style>
