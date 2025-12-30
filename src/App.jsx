import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import "./App.css";

function App() {
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
