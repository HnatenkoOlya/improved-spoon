import { useContext } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import { AuthContext } from "../../context/AuthContext";

function Header({ onLogin, onRegister }) {
  const { isAuth, user, logout } = useContext(AuthContext);
  return (
    <header className={css.header}>
      <div className={css.headContent}>
        <a href="/" className={css.logo}>
          <span className={css.span}>psychologists.</span>services
        </a>
        <Navigation />
        {isAuth ? (
          <div>
            <span className={css.userHeader}>{user.name}</span>
            <button className={css.logoutBtn} onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <AuthButtons onLogin={onLogin} onRegister={onRegister} />
        )}
      </div>
    </header>
  );
}
export default Header;
