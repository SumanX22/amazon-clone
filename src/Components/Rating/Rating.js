import React from "react";
import "./Rating.css";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Rating({ rating }) {
  const absoluteRating = rating > 5 ? 5 : Math.floor(rating);
  const hasHalfStar = absoluteRating < rating;

  let stars = absoluteRating;

  const displayIfHalf = () => {
    if (hasHalfStar && stars < 5) {
      stars++;
      return <StarHalfIcon className="rating__stars" />;
    }
  };

  const displayIfEmptyStars = () => {
    if (stars < 5)
      return Array(5 - stars)
        .fill()
        .map((_) => <StarBorderIcon className="rating__stars" />);
  };

  return (
    <div className="rating">
      {Array(absoluteRating)
        .fill()
        .map((_, i) => (
          <StarIcon className="rating__stars" />
        ))}
      {displayIfHalf()}
      {displayIfEmptyStars()}
    </div>
  );
}

export default Rating;
