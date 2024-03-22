import MovieItem from './MovieItem';


const MovieList = ({movies}) =>  {
  return (

    <>
    <div className="header"> <h3>Movie Database</h3> </div>
    <div className="movieList d-flex flex-row">        
        {
            ((movies.length > 0)?
                movies.map(item => (
                    <MovieItem item={item} key={item.id}/>
                ))
            :'No movies available')
        }
    </div>
    </>
  )
}

export default MovieList