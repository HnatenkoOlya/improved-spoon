import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import AuthModal from "./components/AuthModal/AuthModal.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/psychologists",
      element: <PsychologistsPage />,
    },
    {
      path: "/favorites",
      element: <FavoritesPage />,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Header
          onLogin={() => setIsAuth("login")}
          onRegister={() => setIsAuth("register")}
        />
        {isAuth && <AuthModal mode={isAuth} onClose={() => setIsAuth(null)} />}
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
