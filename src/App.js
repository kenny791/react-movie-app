import React, { useEffect } from "react"



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
        <div>
        <h1>Hello World</h1>
        </div>
    );
}

export default App
