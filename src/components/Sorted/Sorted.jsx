function Sorted({ sortedDate, onChange }) {
  return (
    <div>
      <h3>Sorting Options</h3>
      <select
        value={sortedDate}
        // onChange={(event) => onChange({ ...sortedDate, event.target.value })}
      >
        <option value="Show all">Show all</option>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
        <option value="Less than 10$">Less than 10$</option>
        <option value="Greater than 10$">Greater than 10$</option>
        <option value="Not popular">Not popular</option>
        <option value="Popular">Popular</option>
      </select>
    </div>
  );
}
export default Sorted;
