import {useState, useEffect} from 'react';
import { FaRegStar } from 'react-icons/fa6';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Movie = ({}) => {

    const [rating, setRating] = useState(1);
    const [movieStars, setMovieStars] = useState([1]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [userComment, setUserComment] = useState('');
    const [fav, setFav] = useState(false);




    const handleMovieForm = (e) => {
        e.preventDefault();

        console.log(username.trim().length);

        


    }
   
    


    const updateRating = (e) => {
        let items = e.target.value;
        let arr = [];
        for(let i=0; i<items; i++){
            arr.push(i+1);
        }
        setRating(items);
        setMovieStars(arr); 
    }
 

    return(
        <div className="movie">
            <Form onSubmit={event => handleMovieForm(event)}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="movie_title">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter movie title" value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
            </Form.Group>
            <InputGroup className="mb-3">
                <Form.Label className="d-block w-25" htmlFor="favorite">Favorite</Form.Label>
                <InputGroup.Checkbox id="favorite" checked={fav} onChange={e => setFav(e.currentTarget.checked)} /> 
            </InputGroup>
            <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Star Rating</Form.Label>
                <Form.Control type="range" className="form-range w-25" min="1" max="5" step="1" value={rating} onChange={updateRating}></Form.Control>
                <span className="rangeVal fw-bold p-2 my-2 d-flex flex-row w-auto">
                     {
                        movieStars.map(i => <FaRegStar key={i} className="bg-red rating-star" />)
                     }
                </span>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" name="comment" placeholder="Enter comment (if any)" rows={2} onChange={e => setUserComment(e.target.value)}>{userComment}</Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button as="input" type="submit" value="Save" />
            </Form.Group>
            </Form>
        </div>
    )
}

export default Movie;