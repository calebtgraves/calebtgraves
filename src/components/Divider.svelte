<script>
  import { theme } from "../stores";
</script>

<div class="divider"></div>

{#if $theme === "light"}
  <style>
    div.divider {
      background-color: #000;
    }
  </style>
{:else if $theme === "dark"}
  <style>
    div.divider {
      background-color: #e0e0e0;
    }
  </style>
{/if}

<style>
  div {
    width: 100%;
    height: 3px;
  }
</style>
