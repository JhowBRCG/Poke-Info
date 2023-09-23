import { useContext, useEffect } from "react";
import { ThemeState } from "../../contexts/themes";
import { Button } from "../Button";

const ToggleButton = () => {
  const { setTheme, theme } = useContext(ThemeState);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);

    // Armazene o tema selecionado no localStorage
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    // Recupere o tema do localStorage e configure-o quando o componente for montado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <Button onClick={toggleTheme}>{theme == "light" ? "night" : "day"}</Button>
  );
};

export { ToggleButton };
