import "./search.scss";

function SearchEngine() {
  return (
    <div>
      <label htmlFor="Search">Search a movie</label>
      <input id="Search" type="text" />
      <button>Search</button>
    </div>
  );
}

export default SearchEngine;
