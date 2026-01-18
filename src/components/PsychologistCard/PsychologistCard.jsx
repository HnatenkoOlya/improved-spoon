import { useState } from "react";
import css from "./PsychologistCard.module.css";
import Modal from "../Modal/Modal.jsx";
import AppointmentForm from "../AppointmentForm/AppointmentForm.jsx";
//import heart from "../../assets/icons/Property 1=Normal.svg";
import FavoritesButton from "../FavoritesButton/FavoritesButton.jsx";

function PsychologistsCard({ psychologist }) {
  const [readMore, setReadMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={css.psycContent}>
          <p className={css.title}>Psychologist</p>
          <h3 className={css.name}>{psychologist.name}</h3>
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
        <div>
          <p className={css.about}>{psychologist.about}</p>
          <button
            className={css.readMoreButton}
            onClick={() => setReadMore((prev) => !prev)}
          >
            {readMore ? "Read less" : "Read more"}
          </button>
          {readMore && (
            <ul>
              {psychologist.reviews.map((review, index) => (
                <li key={index}>
                  <p>{review.reviewer}</p>
                  <p>{review.rating}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <button onClick={() => setIsOpen(true)}>
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
            </ul>
          )}
        </div>
      </div>
      <div className={css.price}>
        <p>Rating: {psychologist.rating}</p>
        <p>Price/1 hour: {psychologist.price_per_hour}</p>
        <FavoritesButton psychologist={psychologist} />
      </div>
    </div>
  );
}
export default PsychologistsCard;
// <img src={heart} alt="Heart icon" className={css.heartIcon} />
