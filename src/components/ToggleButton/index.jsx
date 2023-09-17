import { useContext } from "react";
import { ThemeState } from "../../contexts/themes";
import { Button } from "../Button";

const ToggleButton = () => {
  const { setTheme, theme } = useContext(ThemeState);

  return (
    <Button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme == "light" ? "night" : "day"}
    </Button>
  );
};

export { ToggleButton };
