import psychologists from "../../data/psychologists";
import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard.jsx";
import { useState } from "react";
import Sorted from "../../components/Sorted/Sorted.jsx";

function PsychologistsPage() {
  const [sorted, setSorted] = useState({
    name: "all",
    price: "all",
    rating: "all",
  });
  const sortedPsychologists = psychologists.toSorted((a, b) => {
    const byName =
      sorted.name === "all"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    const byPrice =
      sorted.price === "all" ? a.price - b.price : b.price - a.price;
    const byRating =
      sorted.rating === "all" ? a.rating - b.rating : b.rating - a.rating;
    return byName && byPrice && byRating;
  });
  //((a, b) =>a.name.localeCompare(b.name));
  return (
    <div>
      <h2>Here were filters</h2>
      <Sorted sortedDate={sortedPsychologists} onChange={setSorted} />
      <ul>
        {psychologists.map((psychologist) => (
          <li key={psychologist.id}>
            <PsychologistsCard psychologist={psychologist} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychologistsPage;
