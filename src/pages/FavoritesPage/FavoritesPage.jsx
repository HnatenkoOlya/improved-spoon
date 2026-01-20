import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard";
import css from "./FavoritesPage.module.css";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  if (!favorites.length) {
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

  return (
    <ul className={css.container}>
      {favorites.map((p) => (
        <PsychologistsCard key={p.id} psychologist={p} />
      ))}
    </ul>
  );
}

export default FavoritesPage;
