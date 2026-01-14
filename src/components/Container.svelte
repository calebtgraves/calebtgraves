<script>
  export let size = "lg";
  export let direction = "row";
  export let justify = "center";
  export let align = "center";
  export let justifyOnMobile = undefined;
  export let alignOnMobile = undefined;

  import { onMount } from "svelte";

  let container;

  onMount(() => {
    if (container) {
      container.style.justifyContent = justify;
      container.style.alignItems = align;

      if (justifyOnMobile) {
        container.style.setProperty('--justify-mobile', justifyOnMobile);
      }
      if (alignOnMobile) {
        container.style.setProperty('--align-mobile', alignOnMobile);
      }
    }
  });
</script>

<div class={`container ${size} ${direction} ${justifyOnMobile ? 'has-justify-mobile' : ''} ${alignOnMobile ? 'has-align-mobile' : ''}`} bind:this={container}>
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
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    .has-justify-mobile {
      justify-content: var(--justify-mobile) !important;
    }

    .has-align-mobile {
      align-items: var(--align-mobile) !important;
    }
  }
</style>
