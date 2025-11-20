const ANILIST_URL = "https://graphql.anilist.co";

export const getPopularAnime = async () => {
    const query = `
        query {
            Page(perPage: 200) {
                media(type: ANIME, sort: POPULARITY_DESC) {
                    id
                    title {
                        romaji
                        english
                    }
                    coverImage {
                        large
                    }
                    startDate {
                        year
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(ANILIST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        });

        const json = await response.json();
        return json.data.Page.media;
    } catch (err) {
        console.error("Error fetching popular anime:", err);
        return [];
    }
};

export const searchAnime = async (searchQuery) => {
    const query = `
        query ($search: String) {
            Page(perPage: 50) {
                media(search: $search, type: ANIME) {
                    id
                    title {
                        romaji
                        english
                    }
                    coverImage {
                        large
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(ANILIST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query, variables: { search: searchQuery } })
        });

        const json = await response.json();
        return json.data.Page.media;
    } catch (err) {
        console.error("Error searching anime:", err);
        return [];
    }
};
