import { createContext, useState } from "react";

const lightTheme = {
  colors: {
    primaryColor: "#E74C3C",
    primaryColorLight: "#94342A",
    secondaryColor: "#ECF0F1",
    secondaryColorLight: "rgba(255, 255, 255, 0.52)",
    tertiaryColor: "#FFA096",
    neagativeColor: "#000",

    footerColorBg: "#ECF0F1",
    footerColor: "#E74C3C",

    pokemonDetailsBg: "#ECF0F1",
    pokemonDetailsColor: "#000",
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
    secondaryColorLight: "rgba(255, 255, 255, 0.52)",
    tertiaryColor: "#FFA096",
    neagativeColor: "#000",

    footerColorBg: "#0001D1",
    footerColor: "#ECF0F1",

    pokemonDetailsBg: "#1d1d44",
    pokemonDetailsColor: "#ECF0F1",
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
