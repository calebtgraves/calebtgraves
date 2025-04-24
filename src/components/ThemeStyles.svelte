<script>
  import { theme } from "../stores";
</script>

{#if $theme === "light"}
  <style>
    header {
      background-color: #bfd8e3;
    }
    a {
      color: #000;
    }
  </style>
{:else if $theme === "dark"}
  <style>
    * {
      color: #e0e0e0;
    }
    main {
      background-color: #121212;
    }
    header {
      background-color: #1e1e1e;
    }
    a {
      color: #e0e0e0;
    }
  </style>
{/if}
