import AuthButtons from "../AuthButtons/AuthButtons";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

function Header({ onLogin, onRegister }) {
  return (
    <header className={css.header}>
      <div className={css.headContent}>
        <a href="/" className={css.logo}>
          <span className={css.span}>psychologists.</span>services
        </a>
        <Navigation />
        <AuthButtons onLogin={onLogin} onRegister={onRegister} />
      </div>
    </header>
  );
}
export default Header;
