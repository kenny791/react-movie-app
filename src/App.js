import React, { useEffect, useState } from "react"
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=fe9176dd"

// const movie ={
//     "Title": "The Avengers",
//     "Year": "2012",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies =async (title) => {
        const reponse = await fetch (`${API_URL}&s=${title}`)
        const data = await reponse.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies("avengers")
    }, [])


    return (
        <div className="app">
            <h1>Screen Select</h1>
            <div className="search">
                <input 
                    placeholder="Search for a movie"  
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />   
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
        {movies.length > 0 ? 
            (<div className="container">
                {movies.map(movie => (<MovieCard movie={movie} />))}
            </div>) 
            : 
            (<div className="empty">
                <h2>No movies found</h2>
            </div>)
        }
        </div>
    )
}

export default App