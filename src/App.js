import React, { useEffect } from "react"
import './App.css'
import SearchIcon from "./search.svg"


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fe9176dd"

const movie1 ={
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies =async (title) => {
        const reponse = await fetch (`${API_URL}&s=${title}`)
        const data = await reponse.json()
        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies("avengers")
    }, [])



    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for a movie"  
                    value="superman"
                    onChange={() => {}}
                />   
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== "N/A"? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type} </span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App
