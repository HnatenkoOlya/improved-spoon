import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

function AuthModal({ mode, onClose }) {
  return (
    <Modal onClose={onClose}>
      {mode === "login" && <LoginForm />}
      {mode === "register" && <RegisterForm />}
    </Modal>
  );
}
export default AuthModal;
