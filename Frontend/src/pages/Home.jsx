import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchAnime, getPopularAnime } from "../Services/api";
import "../Css/Home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularAnime = async () => {
            try {
                const popularAnime = await getPopularAnime();
                setMovie(popularAnime);
            } catch (err) {
                console.error(err);
                setError("Failed to load anime...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularAnime();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        try {
            setLoading(true);
            const results = await searchAnime(searchQuery);
            setMovie(results);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Search failed...");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <h2>Loading anime...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for anime..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <h2 className="home-title">Popular Anime</h2>

            <div className="movies-grid">
                {movie
                    .filter((item) => {
                        const romaji = item.title?.romaji?.toLowerCase() || "";
                        const english = item.title?.english?.toLowerCase() || "";
                        const q = searchQuery.toLowerCase();

                        return romaji.includes(q) || english.includes(q);
                    })
                    .map((item) => (
                        <MovieCard movie={item} key={item.id} />
                    ))}
            </div>

        </div>
    );
}

export default Home;

