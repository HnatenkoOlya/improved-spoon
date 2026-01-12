import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { AuthContext } from "../../context/AuthContext";
import heart from "../../assets/icons/Property 1=Normal.svg";
import css from "./FavoritesButton.module.css";
import { toast } from "react-hot-toast";

function FavoritesButton({ psychologist }) {
  const { isFavorites, toggleFavorites } = useContext(FavoritesContext);
  const { isAuth } = useContext(AuthContext);

  const handleClick = () => {
    if (!isAuth) {
      toast.info("Please log in to add to favorites");
      return;
    }
    toggleFavorites(psychologist);
  };

  const isActive = isFavorites(psychologist.id);

  return (
    <button onClick={handleClick}>
      <img
        src={heart}
        alt="Heart icon"
        className={isActive ? css.heartActive : css.heartIcon}
      />
    </button>
  );
}

export default FavoritesButton;
