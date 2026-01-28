import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { AuthContext } from "../../context/AuthContext";
import heart from "../../assets/icons/Property 1=Normal.svg";
import heartHover from "../../assets/icons/Property 1=Hover.png";
import css from "./FavoritesButton.module.css";
import { toast } from "react-hot-toast";

function FavoritesButton({ psychologist }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { isAuth } = useContext(AuthContext);

  const isActive = favorites.includes(psychologist.id);

  const handleClick = () => {
    console.log("ADD TO FAVORITES:", psychologist.id, psychologist.name);

    if (!isAuth) {
      toast.error("Please log in to add to favorites");
      return;
    }
    if (isActive) {
      removeFromFavorites(psychologist.id);
    } else {
      addToFavorites(psychologist.id);
    }
  };

  return (
    <button onClick={handleClick} className={css.favoriteBtn}>
      <img
        src={isActive ? heartHover : heart}
        alt="Heart icon"
      />
    </button>
  );
}

export default FavoritesButton;
