<script>
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import Separator from "./Separator.svelte";

  export let professionalExperience;
</script>

<Container size="full" direction="column" align="start">
  <h2>Professional Experience</h2>
  <Divider />
  <Separator size="sm" />
  {#each professionalExperience as { company, title, startDate, endDate, bullets } (company)}
    <Container justify="space-between" align="start">
      <div>
        <h3>{title}</h3>
        <h4 class="company-name">{company}</h4>
      </div>
      <h4>{endDate ? `${startDate}-${endDate}` : `${startDate}-present`}</h4>
    </Container>
    <ul>
      {#each bullets as bullet}
        <li>{bullet}</li>
        <Separator size="sm" />
      {/each}
    </ul>
    <Separator />
  {/each}
</Container>

<style>
  ul {
    padding-left: 2rem;
  }
  .company-name {
    font-style: italic;
    font-weight: 400;
  }
</style>
