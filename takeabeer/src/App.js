import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BeerList from "./pages/BeerList";
import RecipeList from "./pages/RecipeList";
import AddRecipe from "./pages/AddRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerDetail from "./pages/BeerDetail";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/beerList" element={<BeerList />} />
          <Route path="/recipeList" element={<RecipeList />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/beerDetail" element={<BeerDetail />} />
          <Route path="/recipeDetail" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
