import { useState } from 'react';
import logo from './../../images/icon-star.svg';
import illustration from './../../images/illustration-thank-you.svg';

const RatingCard = () => {
    const [rating, setRating] = useState(-1);
    const [hasSubmitted, setSubmit] = useState(false);

    const ratingCard = (
        <div className="card">
            <div className="star_container"><img src={logo} alt="STAR" /></div>
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating_container">
                {(new Array(5).fill(false)).map((e, i) => (
                    <button key = {i} onClick = {() => setRating(i)}>{i+1}</button>
                ))}
            </div>
            <button onClick = {() => setSubmit(true)}>Submit</button>
        </div>
    );

    const thankYouCard = (
        <div className="card">
            <img src={illustration} alt="" />
            <div className="result"><span>You have selected {rating + 1} out of 5</span></div>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    );

    return hasSubmitted? thankYouCard:ratingCard;
}
 
export default RatingCard;