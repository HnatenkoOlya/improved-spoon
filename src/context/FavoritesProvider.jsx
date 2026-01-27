import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FavoritesContext } from "./FavoritesContext";
import {
  addFavorites,
  removeFavorites,
  getFavorites,
} from "../services/favorites";

export const FavoritesProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    if (!isAuth || !user?.email) {
      setFavorites([]);
      return;
    }
    const saved = localStorage.getItem(`favorites_${user.email}`);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [isAuth, user?.email]);*/

  useEffect(() => {
    if (!user?.uid) {
      setFavorites([]);
      setLoading(false);
      return;
    }
    const fetchFavorites = async () => {
      const data = await getFavorites(user.uid);
      setFavorites(data);
      setLoading(false);
    };
    fetchFavorites();
  }, [user]);

  /*useEffect(() => {
    console.log("FAVORITES CONTEXT:", favorites);
  }, [favorites]);*/

  const addToFavorites = async (psychologistId) => {
    if (!user?.uid) return;
    await addFavorites(user.uid, psychologistId);
    setFavorites((prev) => [...prev, psychologistId]);
  };

  const removeFromFavorites = async (psychologistId) => {
    if (!user?.uid) return;
    await removeFavorites(user.uid, psychologistId);
    setFavorites((prev) => prev.filter((id) => id !== psychologistId));
  };

  /*useEffect(() => {
    if (!isAuth || !user?.email) return;

    localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
  }, [favorites, isAuth, user?.email]);*/

  /*useEffect(() => {
    if (!isAuth || !user) {
      localStorage.setItem(
        `favorites_${user.email}`,
        JSON.stringify(favorites)
      );
    }
  }, [favorites, user, isAuth]);*/

  /*const toggleFavorites = (psychologist) => {
    setFavorites((prev) => {
      const exist = prev.some((p) => p.id === psychologist.id);
      return exist
        ? prev.filter((p) => p.id !== psychologist.id)
        : [...prev, psychologist];
    });
  };

  const isFavorites = (id) => {
    return favorites.some((p) => p.id === id);
  };*/
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, loading }}
    >
      {!loading && children}
    </FavoritesContext.Provider>
  );
};
