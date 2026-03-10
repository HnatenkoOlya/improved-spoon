import { useContext, useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { AuthContext } from "../../context/AuthContext";

function Header({ onLogin, onRegister }) {
  const { isAuth, user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className={css.header}>
      <div className={css.headContent}>
        <Link to="/" className={css.logo}>
          <span className={css.span}>psychologists.</span>services
        </Link>

        <button className={css.burger} onClick={toggleOpen}>
          ☰
        </button>
        <div className={`${css.navWrapper} ${isOpen ? css.open : ""}`}>
          <Navigation />
          {isAuth ? (
            <div className={css.mobileAuth}>
              <span>Hello, {user.name}</span>
              <button onClick={logout} className={css.logoutBtn}>
                Log out
              </button>
            </div>
          ) : (
            <AuthButtons onLogin={onLogin} onRegister={onRegister} />
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
/* <Navigation />
        {isAuth ? (
          <div>
            <span className={css.userHeader}>Hello, {user.name}</span>
            <button className={css.logoutBtn} onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <AuthButtons onLogin={onLogin} onRegister={onRegister} />
        )}
           <a href="/" className={css.logo}>*/
