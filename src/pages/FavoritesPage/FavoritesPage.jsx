import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  if (!favorites.lenght) {
    return <p>You haven't favorite psychologists yet</p>;
  }

  return (
    <ul>
      {favorites.map((p) => (
        <PsychologistsCard key={p.id} psychologist={p} />
      ))}
    </ul>
  );
}

export default FavoritesPage;
