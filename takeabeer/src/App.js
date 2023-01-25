import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  )
}

export default App;