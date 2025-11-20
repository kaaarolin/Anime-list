import "../Css/MovieCard.css";

function MovieCard({ movie }) {

    function onFavoriteClick() {
        alert("clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.coverImage.large}
                    alt={movie.title.romaji || movie.title.english}
                />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤︎
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title.romaji || movie.title.english}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
