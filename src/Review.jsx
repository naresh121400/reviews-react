import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {
    
    const[reviewIndex, setReviewIndex] = useState(0);
    const{ name, job, image, text } = reviews[reviewIndex];

    const surprise = () => {
        const next = Math.floor(Math.random() * reviews.length);
        setReviewIndex(next);
    };

    const forward = () => {
        if(reviewIndex === 3){
            setReviewIndex(0);
        }
        else{
            const latestIndex = reviewIndex + 1;
            setReviewIndex(latestIndex);
        }
    };
    const backward = () => {
        if(reviewIndex === 0){
            setReviewIndex(reviews.length - 1);
        }
        else{
            const latestIndex = reviewIndex - 1;
            setReviewIndex(latestIndex);
        }
    };

    return ( 
        <div className="card mx-auto w-50 shadow-lg p-3 my-5 bg-white rounded">
            <img src={image} className="rounded-circle mx-auto d-block" style={{ width: 150, height: 150, objectFit: "cover"}} alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title text-capitalize fw-normal">{name}</h5>
                <p style={{ color: "dodgerblue"}} className="fw-light">{job}</p>
                <p className="card-text text-center">
                    {text}
               </p>
                <div className="my-3">
                    <button className="btn btn-sm" onClick={backward}>
                        <FaChevronLeft size={20} color="#8bcbf9"/>
                    </button>
                    <button className="btn btn-sm" onClick={forward}>
                        <FaChevronRight size={20} color="#8bcbf9"/>
                    </button>
                </div>
                <button className="btn btn-outline-info btn-sm" onClick={surprise}>Surprise Me</button>
            </div>
        </div>
     );
}
 
export default Review;