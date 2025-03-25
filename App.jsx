import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchComponent from './SearchComponent'
//import './app.js'
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";
// 
  const API_URL = `https://www.omdbapi.com/?apikey=80c5d9fe`

const movie1={
  
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"
}


function App() {
  const [movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('')
  const search= async (title)=>{
    const response = await fetch(` ${API_URL}&s=${title}`)
    const data = await response.json()
   setMovies(data.Search);
  }


  useEffect(() => {
    search('batman');
  },[]);

  return (
    <div className="app">
       <DarkModeToggle />
      <h1> ✨🎟️The FilmVault  </h1>
      <div className="search">
        <SearchComponent searchMovies={search}/>
</div>
            <div>{
                   movies?.length > 0
                   ?(
                    <div className='container'>
                     {movies.map((movie)=>(
                      < MovieCard  movie={movie}/>
                     ))} 
                    </div>
                   ): (
                     <div className='empty'>No movies found</div>
                   )
                  }
              
            </div>
            <motion.div 
  className="movie" 
  whileHover={{ scale: 1.05 }} 
  transition={{ type: "spring", stiffness: 200 }}
>
  ...
</motion.div>
      
    </div>
  );
  
}
export default App;