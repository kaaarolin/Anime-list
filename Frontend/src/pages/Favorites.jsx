import "../Css/Favorites.css";
import { useMovieContext} from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Favorites() {
  const { favorites } = useMovieContext();
  const [searchQuery, setSearchQuery] = useState("");

  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorite anime yet</h2>
        <p>Start adding anime to your favorites</p>
      </div>
    );
  }

  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search in favorites..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <h2 className="home-title">Your favorite Anime</h2>

      <div className="movies-grid">
        {favorites
          .filter((item) =>
            item.title.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.title.english && item.title.english.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((item) => (
            <MovieCard movie={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
