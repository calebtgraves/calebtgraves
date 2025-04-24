<script>
  import { onMount } from "svelte";
  import { theme } from "../stores";
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

{#if $theme === "dark"}
  <style>
    .scroll-container::-webkit-scrollbar {
      background: #1e1e1e;
    }
    .scroll-container::-webkit-scrollbar-track {
      background: #1e1e1e;
    }
    .scroll-container::-webkit-scrollbar-thumb {
      background: #555555;
    }
    .scroll-container::-webkit-scrollbar-thumb:hover {
      background: #777777;
    }
    .scroll-container::-webkit-scrollbar-corner {
      background: #1e1e1e;
    }
  </style>
{:else if $theme === "light"}
  <style>
    .scroll-container::-webkit-scrollbar {
      background: #f0f0f0;
      height: 8px;
    }
    .scroll-container::-webkit-scrollbar-track {
      background: #f0f0f0;
    }
    .scroll-container::-webkit-scrollbar-thumb {
      background: #cccccc;
    }
    .scroll-container::-webkit-scrollbar-thumb:hover {
      background: #aaaaaa;
    }
    .scroll-container::-webkit-scrollbar-corner {
      background: #f0f0f0;
    }
  </style>
{/if}

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
  .scroll-container::-webkit-scrollbar {
    height: 8px;
  }
</style>
