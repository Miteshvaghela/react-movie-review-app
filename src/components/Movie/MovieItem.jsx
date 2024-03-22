import { useState } from 'react'
import { FaRegStar } from 'react-icons/fa6';
import { FaXmark } from "react-icons/fa6";
import { randomNumberGenerator } from '../../helpers/functions';


function MovieItem({ item, toggleFav, deleteMovieItem }) {
    let arr = [];
    for(let i=0;i<item.rating;i++){
        arr.push(i+1);
    } 
  return (
    <div key={`${item.id}`} className={`movie-item w-25 shadow-lg rounded-3 m-3 p-3 text-bg-light flex-fill ${item.favorite?'fav':''} position-relative`} onDoubleClick={e => toggleFav(item.id)}>
        <span className="d-block"><b>Username</b> : <b>{item.username}</b></span>
        <span className="d-block"><b>Email</b> : <b>{item.email}</b></span>
        <span className="d-block"><b>Movie</b> : <b>{item.name}</b></span>
        <span className="d-block"><b>Rating</b> : {arr.map(i => <FaRegStar className='text-primary' key={i} />)}</span>
        <span className="d-block"><b>Comment</b> : <b className='text-primary'>{item.comment}</b></span>
        <FaXmark className='ico-times' onClick={e => deleteMovieItem(item.id)}/>
    </div>
  )
}

export default MovieItem