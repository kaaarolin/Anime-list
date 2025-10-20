function Home() {

    const movies = [
        {id: 1, title: "John Wick", release_date: "2023"}, 
        {id: 2, title: "Terminator", release_date: "2023"}, 
        {id: 3, title: "The Lion king", release_date: "2023"}
    ]

    return <div className="home">
        <div className="movies-grid"></div>
    </div>
}