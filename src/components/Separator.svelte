<script>
  export let size = "md";
</script>

<div class={`separator ${size}`}></div>

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
</style>
