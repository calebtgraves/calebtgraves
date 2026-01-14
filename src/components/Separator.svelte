<script>
  export let size = "md";
  export let hideOnMobile = false;
  export let hideOnSmallest = false;
</script>

<div class={`separator ${size} ${hideOnMobile ? 'hide-on-mobile' : ''} ${hideOnSmallest ? 'hide-on-smallest' : ''}`}></div>

<style>
  .separator {
    flex-shrink: 0;
    flex-grow: 0;
  }
  .xs {
    height: 0.25rem;
    width: 0.25rem;
  }
  .sm {
    height: 0.5rem;
    width: 0.5rem;
  }
  .md {
    height: 1rem;
    width: 1rem;
  }
  .lg {
    height: 2rem;
    width: 2rem;
  }
  .xl {
    height: 4rem;
    width: 4rem;
  }

  @media (max-width: 640px) {
    .hide-on-mobile {
      display: none;
    }

    .hide-on-smallest {
      display: none;
    }
  }
</style>
