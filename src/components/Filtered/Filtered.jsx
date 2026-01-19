import css from "../Sorted/Sorted.module.css";

function Filtered({ filteredDate, onChange }) {
  return (
    <div className={css.sorted}>
      <h6 className={css.sortedTitle}>Filtering Options</h6>
      <select
        value={filteredDate}
        onChange={(e) => onChange(e.target.value)}
        className={css.sortedSelect}
      >
        <option className={css.sortedOption} value="Show all">
          Show all
        </option>
        <option className={css.sortedOption} value="Less than 130$">
          Less than 130$
        </option>
        <option className={css.sortedOption} value="Greater than 120$">
          Greater than 120$
        </option>
        <option className={css.sortedOption} value="Not popular">
          Not popular
        </option>
        <option className={css.sortedOption} value="Popular">
          Popular
        </option>
      </select>
    </div>
  );
}
export default Filtered;
