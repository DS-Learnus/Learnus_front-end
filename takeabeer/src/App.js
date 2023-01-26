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
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
    );
}

export default App;
