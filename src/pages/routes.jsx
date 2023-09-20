import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PokemonDetails } from "./PokemonDetails";
import { Search } from "./Search";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/details/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
