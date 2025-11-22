export default function Filter({ setFilterTitle, setFilterRate }) {
  return (
    <div className="filter">
      <input
        className="search-input"
        type="text"
        placeholder="Search title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />

      <select
        className="rating-select"
        onChange={(e) => setFilterRate(Number(e.target.value))}
      >
        <option value="0">All Ratings</option>
        <option value="1">⭐ 1 & up</option>
        <option value="2">⭐ 2 & up</option>
        <option value="3">⭐ 3 & up</option>
        <option value="4">⭐ 4 & up</option>
        <option value="5">⭐ 5 only</option>
      </select>
    </div>
  );
}
