import MovieCard from "../components/MovieCard";
import "../Css/Home.css";

const KarrosFavorites = [

    {
        id: 1,
        title: { english: "Hunter x Hunter"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg"},
        startDate: {year: 2011}
    },

    {
        id: 1,
        title: { english: "Fate/Zero"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/1980/105168l.jpg"},
        startDate: {year: 2011}
    },

    {
        id: 1,
        title: { english: "Mahou Shoujo Madoka★Magica"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/11/55225l.jpg"},
        startDate: {year: 2011}
    },

    {
        id: 1,
        title: { english: "3-gatsu no Lion"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/1637/108857l.jpg"},
        startDate: {year: 2016}
    },

    {
        id: 5,
        title: { english: "Mob Psycho 100"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/5/79183l.jpg"},
        startDate: {year: 2016}
    },

    {
        id: 6,
        title: { english: "Perfect Blue"},
        coverImage: {large: "https://cdn.myanimelist.net/images/anime/1096/144172l.jpg"},
        startDate: {year: 1998}
    },

];

function KarrosFaves() {
    return (
                <div className="favorites-page">
            <h2 className="home-title">Karros Favorite Anime</h2>
            <div className="movies-grid">
                {KarrosFavorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default KarrosFaves;

