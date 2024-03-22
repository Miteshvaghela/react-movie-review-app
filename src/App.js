import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/Movie/MovieList';


function App() {

  const [btnTitle, setBtnTitle] = useState('Open');
  const [movies, setMovies] = useState([]);
  
  const handleBtnEvent = () => {
     (btnTitle === 'Open')?setBtnTitle('Close'):setBtnTitle('Open');
  }

  // fetch movies data from server 


  useEffect(() => {
      
      const fetchData = async () => {
          let getData = await getApiData();
          setMovies(getData);
      }
      fetchData();
  })

  const getApiData = async () => {
      let response = await fetch('http://localhost:8000/movies');
      let data = await response.json(); 
      return data;
  }


  

  const btnObj = {
    title : btnTitle,
    handle : handleBtnEvent
  }

  return (
    <div className="app appBg vh-100 vw-100">
      <div className="container my-0">
        <div className="bg-light-subtle p-4">
            <Header btnObj={btnObj} appTitle={'Movie Review App'}/>
            {(btnTitle === 'Close') && <Movie />}
            <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  )
}

export default App