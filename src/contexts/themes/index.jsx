import { createContext, useState } from "react";

const lightTheme = {
  colors: {
    primaryColor: "#E74C3C",
    primaryColorLight: "#94342A",
    secondaryColor: "#ECF0F1",
    tertiaryColor: "#FFA096",
    neagativeColor: "#000",
  },

  images: {
    hero: "./src/assets/img/bg-hero-day.png",
    pokedex: "./src/assets/img/bg-cards-day.png",
  },

  fonts: {
    primaryFont: "'Press Start 2P', sans-serif;",
  },

  radius: {
    default: "10px",
  },
};

const darkTheme = {
  colors: {
    primaryColor: "#E74C3C",
    primaryColorLight: "#94342A",
    secondaryColor: "#ECF0F1",
    tertiaryColor: "#FFA096",
    neagativeColor: "#000",
  },

  images: {
    hero: "./src/assets/img/bg-hero-night.png",
    pokedex: "./src/assets/img/bg-cards-night.png",
  },

  fonts: {
    primaryFont: "'Press Start 2P', sans-serif;",
  },

  radius: {
    default: "10px",
  },
};

const ThemeState = createContext();

const ThemeStateProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeState.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeState.Provider>
  );
};

export { lightTheme, darkTheme, ThemeState, ThemeStateProvider };
