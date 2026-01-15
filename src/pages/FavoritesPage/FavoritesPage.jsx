import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard";
import css from "./FavoritesPage.module.css";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  if (!favorites.length) {
    return (
      <p className={css.container}>You haven't favorite psychologists yet</p>
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
