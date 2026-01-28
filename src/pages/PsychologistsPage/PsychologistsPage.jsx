import PsychologistsCard from "../../components/PsychologistCard/PsychologistCard.jsx";
import { useEffect, useState } from "react";
import Sorted from "../../components/Sorted/Sorted.jsx";
import Filtered from "../../components/Filtered/Filtered.jsx";
import css from "./PsychologistsPage.module.css";
import { getPsychologists } from "../../services/psychologists.js";

function PsychologistsPage() {
  const [sorted, setSorted] = useState("Show all");
  const [filtered, setFilterd] = useState("Show all");
  const [count, setCount] = useState(3);
  const [psychologistData, setPsychologistsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPsychologists();
      setPsychologistsData(data);
    };
    fetchData();
  }, []);

  const sortedPsychologists = psychologistData.toSorted((a, b) => {
    if (sorted === "A to Z") {
      return a.name.localeCompare(b.name);
    }
    if (sorted === "Z to A") {
      return b.name.localeCompare(a.name);
    }
    if (sorted === "Less than 130$") {
      return a.price_per_hour - b.price_per_hour;
    }
    if (sorted === "Greater than 120$") {
      return b.price_per_hour - a.price_per_hour;
    }
    if (sorted === "Not popular") {
      return a.rating - b.rating;
    }
    if (sorted === "Popular") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const filteredPsychologists = sortedPsychologists.filter((psychologist) => {
    if (filtered === "Less than 130$") {
      return psychologist.price_per_hour < 130;
    }
    if (filtered === "Greater than 120$") {
      return psychologist.price_per_hour > 120;
    }
    if (filtered === "Not popular") {
      return psychologist.rating < 4.7;
    }
    if (filtered === "Popular") {
      return psychologist.rating > 4.75;
    }
    return true;
  });

  return (
    <div className={css.psycContainer}>
      <div className={css.sorting}>
        <Sorted
          sortedDate={sorted}
          onChange={setSorted}
          className={css.psycContainer}
        />
        <Filtered
          filteredDate={filtered}
          onChange={setFilterd}
          className={css.psycContainer}
        />
      </div>
      <ul>
        {filteredPsychologists.slice(0, count).map((psychologist) => (
          <li key={psychologist.id} className={css.psycItem}>
            <PsychologistsCard psychologist={psychologist} />
          </li>
        ))}
      </ul>
      {count < filteredPsychologists.length && (
        <button
          onClick={() => setCount((prev) => prev + 3)}
          className={css.btnPage}
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default PsychologistsPage;
