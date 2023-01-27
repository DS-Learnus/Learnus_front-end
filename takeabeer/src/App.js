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
    /*
    <RecipeDetail recipeId={"63d17e71cc0df63ec9ed6696"} userId="63cd87f1205b64d3463ebcb6"></RecipeDetail>
    */

    <BeerDetail beerId={"63ccb786560d43ce3e821087"} userId="63cd87f1205b64d3463ebcb6"></BeerDetail>

    );
/*
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/beerList" element={<BeerList />} />
          <Route path="/recipeList" element={<RecipeList />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/beerDetail" element={<BeerDetail />} />
          <Route path="/recipeDetail" element={<RecipeDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypageBeer" element={<MyPageBeer />} />
          <Route path="/mypageRecipe" element={<MyPageRecipe />}/>
        </Routes>
      </Router>
    </>
  );
*/
}

export default App;
