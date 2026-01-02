function Filtered({ filteredDate, onChange }) {
  return (
    <div>
      <h6>Filtering Options</h6>
      <select value={filteredDate} onChange={(e) => onChange(e.target.value)}>
        <option value="Show all">Show all</option>
        <option value="Less than 130$">Less than 130$</option>
        <option value="Greater than 120$">Greater than 120$</option>
        <option value="Not popular">Not popular</option>
        <option value="Popular">Popular</option>
      </select>
    </div>
  );
}
export default Filtered;
