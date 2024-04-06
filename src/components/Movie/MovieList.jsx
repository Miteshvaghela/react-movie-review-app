import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, toggleFav, deleteMovieItem}) =>  {
  return (
    <>
    <div className="header"> <h3>Fetch data from server</h3> </div>
    <div className="movieList d-flex flex-row justify-content-between flex-wrap">        
        {
            ((movies.length > 0)?
                movies.map(item => (
                    <MovieItem item={item} key={item.id} toggleFav={toggleFav} deleteMovieItem={deleteMovieItem}/>
                ))
            :'No movies available')
        }
    </div>
    </>
  )
}

export default MovieList