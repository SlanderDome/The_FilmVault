import React from 'react';

const MovieCard=({movie}) =>{
    return (
        <div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.Title}></img>
          </div>
          <div>
            <h3>{movie.Title}</h3>
          </div>
         </div>
    )
}
export default MovieCard;
