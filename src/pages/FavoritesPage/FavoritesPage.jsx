import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard";
import css from "./FavoritesPage.module.css";
import { getFavorites } from "../../services/favorites";
import { AuthContext } from "../../context/AuthContext";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    if (!user?.uid) return;
    const fetchData = async () => {
      const favoritePsych = await getFavorites(user.uid);
      //console.log("PSYCHOLOGISTS FROM DB:", data);
      setFavoritesData(favoritePsych);
    };
    fetchData();
  }, [user]);

  if (!user) {
    return (
      <p className={css.container}>Please log in to view your favorites.</p>
    );
  }

  if (!favoritesData.length) {
    return (
      <div>
        <p className={css.container}>
          You currently have no saved psychologists in your favorites.
        </p>
        <img src="/images/img.jpg" alt="Thanks" className={css.img} />
      </div>
    );
  }

  /*if (!Auth) {
    return (
      <div>
        <p className={css.container}>
          You currently have no saved psychologists in your favorites, in order
          to fill out this page, please register or log in. Thank you for
          choosing us.
        </p>
        <img src="/images/img.jpg" alt="Thanks" className={css.img} />
      </div>
    );
  }*/
  return (
    <ul className={css.container}>
      {favoritesData.map((p) => (
        <PsychologistsCard key={p.id} psychologist={p} />
      ))}
    </ul>
  );
}

export default FavoritesPage;
