import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!setUser) {
      setFavorites([]);
      return;
    }
    const saved = localStorage.getItem("favorites_${user.email}");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [setUser, user]);

  useEffect(() => {
    if (setUser) {
      localStorage.setItem(
        "favorites_${user.email}",
        JSON.stringify(favorites)
      );
    }
  }, [favorites, user, setUser]);

  const toggleFavorites = (psychologist) => {
    setFavorites((prev) => {
      const exist = prev.find((p) => p.id === psychologist.id);
      return exist
        ? prev.filter((p) => p.id !== psychologist.id)
        : [...prev, psychologist];
    });
  };

  const isFavorites = (id) => {
    favorites.some((p) => p.id === id);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorites, toggleFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
