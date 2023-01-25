import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BeerList from "./pages/BeerList";
import RecipeList from "./pages/RecipeList";
import NavbarElements from "./components/NavbarElements";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <>
      <Router>
      <NavbarElements />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/BeerList" element={<BeerList />} />
          <Route path="/RecipeList" element={<RecipeList />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
