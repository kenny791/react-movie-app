import React, { useEffect } from "react"
import './App.css'
import SearchIcon from "./search.svg"


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fe9176dd"

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
        </div>
    );
}

export default App
