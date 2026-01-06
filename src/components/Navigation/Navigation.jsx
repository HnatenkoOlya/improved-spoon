import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/psychologists">Psychologists</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}
export default Navigation;
