<script>
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import Separator from "./Separator.svelte";
  import ThemeStyles from "./ThemeStyles.svelte";

  export let projects;
</script>

<Container size="full" direction="column" align="start">
  <h2>Projects</h2>
  <Divider />
  <Separator size="sm" />
  {#each projects as { title, role, description, link } (title)}
    <Container justify="space-between" align="start">
      <div>
        <h3><a href={link} target="_blank">{title}</a></h3>
        <h4 class="role">{role}</h4>
        <ul>
          <li>{description}</li>
        </ul>
      </div>
    </Container>
    <Separator />
  {/each}
</Container>

<ThemeStyles />

<style>
  .role {
    font-style: italic;
    font-weight: 400;
  }
  ul {
    padding-left: 2rem;
  }
</style>
