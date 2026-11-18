const theme = document.querySelector(".theme");
const preference = matchMedia("(prefers-color-scheme: dark)");
let savedTheme;
try { savedTheme = localStorage.getItem("an-wang-preview-theme"); } catch {}
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  theme.setAttribute("aria-pressed", String(dark));
}
setTheme(savedTheme ? savedTheme === "dark" : preference.matches);
theme.addEventListener("click", () => {
  const dark = theme.getAttribute("aria-pressed") !== "true";
  setTheme(dark);
  try { localStorage.setItem("an-wang-preview-theme", dark ? "dark" : "light"); } catch {}
});
const filters = [...document.querySelectorAll("[data-filter]")];
for (const button of filters) {
  button.addEventListener("click", () => {
    for (const filter of filters) filter.setAttribute("aria-pressed", String(button === filter));
    for (const group of document.querySelectorAll("[data-group]")) {
      group.hidden = button.dataset.filter !== "all" && group.dataset.group !== button.dataset.filter;
    }
  });
}
