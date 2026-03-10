import { useState } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import css from "./PsychologistCard.module.css";
import Modal from "../Modal/Modal.jsx";
import AppointmentForm from "../AppointmentForm/AppointmentForm.jsx";
//import heart from "../../assets/icons/Property 1=Normal.svg";
import FavoritesButton from "../FavoritesButton/FavoritesButton.jsx";
import star from "../../assets/icons/Star 2.svg";

function PsychologistsCard({ psychologist }) {
  const [readMore, setReadMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useContext(AuthContext);
  const tabs = ["About", "Reviews"];
  const [activeTab, setActiveTab] = useState("About");
  const [showQr, setShowQr] = useState(false);
  const [qrSrc, setQrSrc] = useState("");

  const handleGenerateQr = () => {
    const profileUrl = window.location.href + `#${psychologist.id}`;

    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(profileUrl)}`,
    );

    setShowQr(true);
  };

  const handleOpenModal = () => {
    if (!isAuth) {
      toast.error("Please log in first");
      return;
    }
    setIsOpen(true);
  };

  return (
    <div className={css.psychologistCard}>
      <div className={css.imgDiv}>
        <img
          className={css.img}
          src={psychologist.avatar_url}
          alt={psychologist.name}
        />
      </div>

      <div className={css.allText}>
        <div className={css.headerRow}>
          <div className={css.psycContent}>
            <p className={css.title}>Psychologist</p>
            <h3 className={css.name}>{psychologist.name}</h3>
          </div>
          <div className={css.price}>
            <div className={css.ratingBlock}>
              <img src={star} alt="Star" className={css.starIcon} />
              <p>Rating: {psychologist.rating}</p>
            </div>
            <div className={css.priceBlock}>
              <p>
                Price/1 hour:{" "}
                <span className={css.colorPrice}>
                  {psychologist.price_per_hour}$
                </span>{" "}
              </p>
            </div>
            <FavoritesButton psychologist={psychologist} />
          </div>
        </div>

        <div className={css.info}>
          <p className={css.experience}>
            <span className={css.experienceLabel}>Experience: </span>
            {psychologist.experience}
          </p>
          <p className={css.experience}>
            <span className={css.experienceLabel}>License: </span>
            {psychologist.license}
          </p>
          <p className={css.experience}>
            <span className={css.experienceLabel}>Specialization: </span>
            {psychologist.specialization}
          </p>
          <p className={css.experience}>
            <span className={css.experienceLabel}>Initial consultation: </span>
            {psychologist.initial_consultation}
          </p>
        </div>
        <div className={css.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? css.activeTab : css.tab}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "About" && (
          <div className={css.aboutSection}>
            <p className={css.about}>{psychologist.about}</p>
            <button
              className={css.readMoreButton}
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? "Read less" : "Read more"}
            </button>
            {readMore && (
              <div>
                <button
                  onClick={handleOpenModal}
                  className={css.appointmentBtn}
                >
                  Make an appointment
                </button>
                {isOpen && (
                  <Modal onClose={() => setIsOpen(false)}>
                    <AppointmentForm
                      psychologist={psychologist}
                      onSuccess={() => setIsOpen(false)}
                    />
                  </Modal>
                )}
                <button onClick={handleGenerateQr} className={css.shareBtn}>
                  Share profile
                </button>
                {showQr && (
  <div className={css.qrBlock}>
    <p>Scan for share this psychologist profile</p>
    <img src={qrSrc} alt="QR code for psychologist profile" />
  </div>
)}
              </div>
            )}
          </div>
        )}
        {activeTab === "Reviews" && (
          <div>
            <ul className={css.reviewsList}>
              {psychologist.reviews?.map((review) => (
                <li
                  key={`${review.reviewer}-${review.rating}`}
                  className={css.reviewItem}
                >
                  <div className={css.reviewHeader}>
                    <p className={css.reviewer}>{review.reviewer}</p>
                    <img src={star} alt="Star" className={css.starIconRew} />
                    <p className={css.rating}>{review.rating}</p>
                  </div>
                  <p className={css.comment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default PsychologistsCard;
// <img src={heart} alt="Heart icon" className={css.heartIcon} />
/*      <div>
          <p className={css.about}>{psychologist.about}</p>
          <button
            className={css.readMoreButton}
            onClick={() => setReadMore((prev) => !prev)}
          >
            {readMore ? "Read less" : "Read more"}
          </button>
          {readMore && (
            <div>
              <ul className={css.reviewsList}>
                {psychologist.reviews?.map((review) => (
                  <li
                    key={`${review.reviewer}-${review.rating}`}
                    className={css.reviewItem}
                  >
                    <div className={css.reviewHeader}>
                      <p className={css.reviewer}>{review.reviewer}</p>
                      <img src={star} alt="Star" className={css.starIconRew} />
                      <p className={css.rating}>{review.rating}</p>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                  </li>
                ))}
              </ul>
              <button onClick={handleOpenModal} className={css.appointmentBtn}>
                Make an appointment
              </button>
              {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                  <AppointmentForm
                    psychologist={psychologist}
                    onSuccess={() => setIsOpen(false)}
                  />
                </Modal>
              )}
            </div>
          )}
        </div>*/
