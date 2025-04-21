
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
        likes: 0,
        dislikes: 0
      };

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      };

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }

  }
  render() {
    return (
     <>
        <div className='content-rating'>
            <p>
           <h3>Daily Motivation</h3> 

                "Success is not final, failure is not fatal: It is the courage to continue that counts."
                — Winston Churchill

                What do you think of today’s motivation?
            </p>

            <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                
                <button className="dislike-button" onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislikes})
                </button>
            </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
