import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const { user, isAuth } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!isAuth || !user?.email) {
      setFavorites([]);
      return;
    }
    const saved = localStorage.getItem(`favorites_${user.email}`);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [isAuth, user?.email]);

  useEffect(() => {
    if (!isAuth || !user?.email) return;

    localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
  }, [favorites, isAuth, user?.email]);

  /*useEffect(() => {
    if (!isAuth || !user) {
      localStorage.setItem(
        `favorites_${user.email}`,
        JSON.stringify(favorites)
      );
    }
  }, [favorites, user, isAuth]);*/

  const toggleFavorites = (psychologist) => {
    setFavorites((prev) => {
      const exist = prev.some((p) => p.id === psychologist.id);
      return exist
        ? prev.filter((p) => p.id !== psychologist.id)
        : [...prev, psychologist];
    });
  };

  const isFavorites = (id) => {
    return favorites.some((p) => p.id === id);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorites, toggleFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

/*import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const { user, isAuth } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  // завантаження favorites
  useEffect(() => {
    if (!isAuth || !user) {
      setFavorites([]);
      return;
    }

    const saved = localStorage.getItem(`favorites_${user.email}`);

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [isAuth, user]);

  // збереження favorites
  useEffect(() => {
    if (!isAuth || !user) return;

    localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
  }, [favorites, isAuth, user]);

  const toggleFavorites = (psychologist) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === psychologist.id);

      return exists
        ? prev.filter((p) => p.id !== psychologist.id)
        : [...prev, psychologist];
    });
  };

  const isFavorites = (id) => favorites.some((p) => p.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorites, toggleFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};*/
