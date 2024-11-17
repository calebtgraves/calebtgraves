<script>
  export let size = "lg";
  export let direction = "row";
  export let justify = "center";
  export let align = "center";

  import { onMount } from "svelte";

  let container;

  onMount(() => {
    if (container) {
      container.style.justifyContent = justify;
      container.style.alignItems = align;
    }
  });
</script>

<div class={`container ${size} ${direction}`} bind:this={container}>
  <slot></slot>
</div>

<style>
  .container {
    margin: 0 auto;
    width: 100%;
  }

  .full {
    max-width: 100%;
  }

  .xl {
    max-width: 1080px;
  }

  .lg {
    max-width: 950px;
  }

  .md {
    max-width: 720px;
  }

  .sm {
    max-width: 540px;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>
