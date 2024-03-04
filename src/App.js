import "./app.scss";
import SearchEngine from "./components/SearchEngine";

function App() {
  return (
    <div className="appContainer">
      <div className="searchContainer">
        <h1>My Watchlist</h1>
        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
