import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, ThemeState } from "./contexts/themes";
import { AppRoutes } from "./pages/routes";
import { useContext } from "react";

const App = () => {
  const { theme } = useContext(ThemeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
