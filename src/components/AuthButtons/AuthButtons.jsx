import css from "./AuthButtons.module.css";
function AuthButtons({ onLogin, onRegister }) {
  return (
    <div className={css.authButtons}>
      <button onClick={onLogin} className={css.btnLogin}>
        Log In
      </button>
      <button onClick={onRegister} className={css.btnRegister}>
        Registration
      </button>
    </div>
  );
}
export default AuthButtons;
