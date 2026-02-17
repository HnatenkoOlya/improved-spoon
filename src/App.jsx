import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import AuthModal from "./components/AuthModal/AuthModal.jsx";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="container">
      <BrowserRouter>
        <Header
          onLogin={() => setIsAuth("login")}
          onRegister={() => setIsAuth("register")}
        />
        {isAuth && <AuthModal mode={isAuth} onClose={() => setIsAuth(null)} />}
        <Routes>
          <Route
            path="/"
            element={<HomePage setGlobalLoading={setLoading} />}
          />

          <Route
            path="/psychologists"
            element={<PsychologistsPage setGlobalLoading={setLoading} />}
          />

          <Route
            path="/favorites"
            element={<FavoritesPage setGlobalLoading={setLoading} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
        {isLoading && <Loader />}
      </BrowserRouter>
    </div>
  );
}

export default App;
/*   <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element}></Route>
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
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
        */
