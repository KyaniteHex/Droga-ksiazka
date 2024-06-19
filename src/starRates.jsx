import React from "react";


const StarRating = ({ averageRating }) => {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating - fullStars >= 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className='fa-solid fa-star text-orange-600'></i>);
    }
    if (hasHalfStar) {
        stars.push(
            <i
                key='half'
                className='fa-solid fa-star-half-stroke text-orange-600'></i>
        );
    }

    return (
            <span>{stars}</span>
    );
};

export default StarRating;
