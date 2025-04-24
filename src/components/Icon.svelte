<script>
  import { theme } from "../stores";

  export let name;
  export let type = "filled";
  export let size = 2;
  export let color = null;

  let themeColor = $theme === "dark" ? "#e0e0e0" : "#000";

  $: theme.subscribe((value) => {
    themeColor = value === "dark" ? "#e0e0e0" : "#000";
  });

  let className = "material-icons";

  if (type === "outlined") {
    className = "material-icons-outlined";
  } else if (type === "rounded") {
    className = "material-icons-rounded";
  } else if (type === "sharp") {
    className = "material-icons-sharp";
  } else if (type === "two-tone") {
    className = "material-icons-two-tone";
  }
</script>

<span
  class={className}
  style="font-size: {size}em; color: {color ||
    themeColor}; text-decoration:none;"
>
  {name}
</span>
