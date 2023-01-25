import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BeerDetail from "./pages/BeerDetail";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/beerDetail" element={<BeerDetail />} />
          <Route path="/recipeDetail" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
