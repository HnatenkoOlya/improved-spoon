function AuthButtons({ onLogin, onRegister }) {
  return (
    <div>
      <button onClick={onLogin}>Log in</button>
      <button onClick={onRegister}>Register</button>
    </div>
  );
}
export default AuthButtons;
