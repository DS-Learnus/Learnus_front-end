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
import MyPage from './pages/MyPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <RecipeDetail recipeId={"63ced5abe15a3a11e40907b4"}></RecipeDetail>
    );
}

export default App;
