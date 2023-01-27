import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BeerList from './pages/BeerList';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerDetail from './pages/BeerDetail';
import RecipeDetail from './pages/RecipeDetail';
import LoginPage from './pages/LoginPage';
import MyPageBeer from './pages/MyPageBeer';
import RegisterPage from './pages/RegisterPage';
import MyPageRecipe from './pages/MyPageRecipe';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/beerList" element={<BeerList />} />
          <Route path="/recipeList" element={<RecipeList />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/beerDetail" element={<BeerDetail beerId="63d3531c21b56c97a5cbde24" userId="63d3544d21b56c97a5cbde4a"/>} />
          <Route path="/recipeDetail" element={<RecipeDetail recipeId={"63d35b162ce2921dd60fbe1e"} userId="63d3544d21b56c97a5cbde4a"/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypageBeer" element={<MyPageBeer />} />
          <Route path="/mypageRecipe" element={<MyPageRecipe />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
