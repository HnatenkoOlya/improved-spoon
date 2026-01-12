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
    <div>
      <div className={css.imgDiv}>
        <img
          className={css.img}
          src={psychologist.avatar_url}
          alt={psychologist.name}
        />
      </div>
      <div className={css.psycContent}>
        <h3>{psychologist.name}</h3>
        <p>Experience: {psychologist.experience}</p>
        <p>License: {psychologist.license}</p>
        <p>Specialization: {psychologist.specialization}</p>
        <p>Initial consultation: {psychologist.initial_consultation}</p>
        <p>{psychologist.about}</p>
        <button onClick={() => setReadMore((prev) => !prev)}>
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
            <button onClick={() => setIsOpen(true)}>Make an appointment</button>
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
