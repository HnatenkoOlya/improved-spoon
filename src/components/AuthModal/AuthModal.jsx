import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

function AuthModal({ mode, onClose }) {
  return (
    <Modal onClose={onClose}>
      {mode === "login" && <LoginForm onSuccess={onClose} />}
      {mode === "register" && <RegisterForm onSuccess={onClose} />}
    </Modal>
  );
}
export default AuthModal;
