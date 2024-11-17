<script>
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import Separator from "./Separator.svelte";

  export let languages;
</script>

<Container size="full" direction="column" align="start">
  <h2>Languages</h2>
  <Divider />
  <Separator size="sm" />
  <Container>
    {#each languages as { language, proficiency } (language)}
      <Container justify="space-between" align="start">
        <div>
          <h3>{language}</h3>
          <h4 class="language-proficiency">{proficiency}</h4>
        </div>
      </Container>
      <Separator />
    {/each}
  </Container>
  <Separator />
</Container>

<style>
  .language-proficiency {
    font-style: italic;
    font-weight: 400;
  }
</style>
