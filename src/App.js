import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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

  const getApiData = async (id = null) => {
      let url = 'http://localhost:8000/movies';
      if(id !== null && id > 0){
        url += `/${id}`;
      }
      try{
        let response = await fetch(url, {
          method : 'GET',
          headers : {
            'Content-type' : 'application/json'
          }
        });

        let data = await response.json(); 

        return data;
      }catch(error){
        console.log(error);
      }     
      
      
  }

  const createMovieRecord = async (obj) => {
      // server side validation should be done. 

     try{

        await fetch('http://localhost:8000/movies', {
          method : 'POST', 
          headers : {
            'Content-type' : 'application/json'
          },
          body : JSON.stringify(obj)
        });
        alert('Movie item created.'); 


     }catch(error){
      
        console.log('Error occured while creating a record Message : ', Error);
     }
      
  }

  const toggleFav = async ( id ) => { // update the database
    // fetch movie record from the database  
    const fetchMovie = await getApiData(id); 

    fetchMovie.favorite = !fetchMovie.favorite;

    // update record from the database;

    await fetch(`http://localhost:8000/movies/${id}`, {
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(fetchMovie)
    });
    alert('Movie item updated.');
  }


  const deleteMovieItem = async (id) => {
    await fetch(`http://localhost:8000/movies/${id}`, {
      method : 'DELETE'
    });
    alert('Movie item deleted.');
  }

  

  const btnObj = {
    title : btnTitle,
    handle : handleBtnEvent
  }

  return (
    <div className="app appBg vh-100 vw-100 ">
      <div className="container my-0 shadow shadow-lg bg-light-subtle">
        <div className="p-4">
            <Header btnObj={btnObj} appTitle={'Movie Review App'}/>
            {(btnTitle === 'Close') && <Movie createMovieRecord={createMovieRecord}/>}
            <MovieList movies={movies} toggleFav={toggleFav} deleteMovieItem={deleteMovieItem}/>
        </div>
        <div className='footer my-4 py-4'>
            <Footer text={`All rights reserved :D`}/>
        </div>
      </div>
    </div>
  )
}

export default App