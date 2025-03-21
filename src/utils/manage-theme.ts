import storage from "react-secure-storage";

export const getCurrentTheme = () => {
  const darkMode = storage.getItem("darkMode");
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (darkMode && darkMode !== "on") {
    theme = "dark";
  } else {
    theme = "light";
  }

  return theme;
};

export const loadTheme = (theme: string) => {
  const root = document.querySelector(":root");
  if (root) root.setAttribute("color-scheme", `${theme}`);
};
