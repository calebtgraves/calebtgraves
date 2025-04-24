import { writable } from "svelte/store";

if (window.matchMedia) {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme =
    localStorage.getItem("theme") ||
    (prefersDarkScheme.matches ? "dark" : "light");
  localStorage.setItem("theme", currentTheme);
}

export const theme = writable(localStorage.getItem("theme") || "light");

export const toggleTheme = () => {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    return newTheme;
  });
};
