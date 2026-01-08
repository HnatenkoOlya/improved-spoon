import { NavLink } from "react-router";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink className={css.text} to="/">Home</NavLink>
      <NavLink className={css.text} to="/psychologists">Psychologists</NavLink>
      <NavLink className={css.text} to="/favorites">Favorites</NavLink>
    </nav>
  );
}
export default Navigation;
