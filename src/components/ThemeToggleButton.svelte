<script>
  import { theme, toggleTheme } from "../stores";
  import Icon from "./Icon.svelte";
</script>

<button
  class="theme-toggle"
  on:click={toggleTheme}
  aria-label={`${$theme === "light" ? "Switch to dark mode" : "Switch to light mode"}`}
>
  <Icon name={$theme === "light" ? "mode_night" : "light_mode"} />
</button>

<style>
  .theme-toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
