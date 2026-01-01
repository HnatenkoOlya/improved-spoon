import css from "./PsychologistCard.module.css";
function PsychologistsCard({ psychologist }) {
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
        <button>Read more</button>
      </div>
      <div className={css.price}>
        <p>Rating: {psychologist.rating}</p>
        <p>Price/1 hour: {psychologist.price_per_hour}</p>
      </div>
    </div>
  );
}
export default PsychologistsCard;
