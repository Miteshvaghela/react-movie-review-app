import {useState, useEffect} from 'react';
import { FaRegStar } from 'react-icons/fa6';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useCol } from 'react-bootstrap/esm/Col';


const Movie = ({ createMovieRecord }) => {

    const [rating, setRating] = useState(1);
    const [movieStars, setMovieStars] = useState([1]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [userComment, setUserComment] = useState('');
    const [fav, setFav] = useState(false);





    const handleMovieForm = (e) => {
        e.preventDefault();
        const errors = []; 

        if(username.trim().length < 3){
            errors.push('Please enter username');
        }else if(email.trim().length === 0 || email.trim().length < 3 || !isEmail(email)){
            errors.push('Please enter email');
        }else if(movieTitle.trim().length === 0){
            errors.push('Please enter Movie title.')
        }else{
            // validation success create an object from the values and send it to component.

            
                const obj = {
                    id : Math.ceil(Math.random() * (10000000000 - 1) + 1).toString(),
                    username : username,
                    name : movieTitle,
                    rating : rating,
                    favorite : fav,
                    email : email,
                    comment : userComment
                }
                createMovieRecord(obj);

                // reset all the input filds 


                setUsername('');
                setEmail('');
                setMovieTitle('');
                setFav(false);
                setRating(1);
                setUserComment('');
        }


        if(errors.length > 0){
            alert(errors.join('<br/>'));
            return false;
        }
 

    }
   
    
    const isEmail = ( email ) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
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
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
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
                <Form.Control as="textarea" name="comment" placeholder="Enter comment (if any)" rows={2} onChange={e => setUserComment(e.target.value)} value={userComment}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button as="input" type="submit" value="Save" />
            </Form.Group>
            </Form>
        </div>
    )
}

export default Movie;