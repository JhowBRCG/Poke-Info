import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Search } from "./Search";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
