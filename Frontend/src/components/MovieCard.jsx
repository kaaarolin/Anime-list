import "../Css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.coverImage.large}
                    alt={movie.title.romaji || movie.title.english}
                />
                <div className="movie-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                    >
                        ❤︎
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title.romaji || movie.title.english}</h3>
                <p>{movie.startDate?.year || "Unknown"}</p>
            </div>
        </div>
    );
}

export default MovieCard;

