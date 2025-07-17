import React, { useState } from 'react';
import './ContentRating.css';

const ContentRating = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setTotalRatings(totalRatings + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setTotalRatings(totalRatings + 1);
  };

  return (
    <div className="content-rating">
      <h3>My Best Motivational Quotes</h3>
      <p>
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
        — Winston Churchill
        <br />
        What do you think of today’s motivation?
      </p>
      <hr />
      <div className="rating-buttons">
        <button className="like-button" onClick={handleLike}>
          <i className="fa-solid fa-thumbs-up"></i> Like {likes}
        </button>

        <button className="dislike-button" onClick={handleDislike}>
          <i className="fa-solid fa-thumbs-down"></i> Dislike {dislikes}
        </button>
      </div>

      <div className="total-rating">
        Total ratings: {totalRatings}
      </div>
    </div>
  );
};

export default ContentRating;
