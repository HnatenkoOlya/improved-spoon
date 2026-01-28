import { useEffect } from "react";
import css from "./Modal.module.css";
import close from "../../assets/icons/x.svg";

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyClose);

    return () => {
      document.removeEventListener("keydown", handleKeyClose);
    };
  }, [onClose]);

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClose}>
      <div className={css.modal}>
        <button className={css.btnClose} onClick={onClose}>
          <img src={close} alt="Close modal" />
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal;
