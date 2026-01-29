import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard";
import css from "./FavoritesPage.module.css";
import { getPsychologists } from "../../services/psychologists";
import { AuthContext } from "../../context/AuthContext";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await getPsychologists();
      setFavoritesData(data);
    };
    fetchAll();
  }, []);

  if (!user) {
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
  }
  const favoritesDataFiltered = favoritesData.filter((p) =>
    favorites.includes(p.id),
  );
  if (!favoritesDataFiltered.length) {
    return (
      <div>
        <p className={css.container}>
          You currently have no saved psychologists in your favorites.
        </p>
        <img src="/images/img.jpg" alt="Thanks" className={css.img} />
      </div>
    );
  }

  return (
    <ul className={css.container}>
      {favoritesDataFiltered.map((p) => (
       <li key={p.id} className={css.psycItem}>
             <PsychologistsCard key={p.id} psychologist={p} />
          </li>
      ))}
    </ul>
  );
}

export default FavoritesPage;
