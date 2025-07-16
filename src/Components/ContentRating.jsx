import React, { Component } from 'react';
import './ContentRating.css';


class ContentRating extends Component {
    constructor(){
        super();
        this.state = {
          likes: 0,
          dislikes: 0,
          totalRatings:0,
          handleLike: () =>{
            this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings + 1
            }))
          },

          handleDislike: () => {
            this.setState((prevState) =>({
              dislikes: prevState.dislikes + 1,
              totalRatings: prevState.totalRatings + 1
            }))
          }

        };
    }



    render(){
        return(
          <>
            <div className='content-rating'>
              
                <h3>My Best Motivationl Quotes</h3> 
                  <p>
                    "Success is not final, failure is not fatal: It is the courage to continue that counts."
                     — Winston Churchill

                     What do you think of today’s motivation?
                  </p>
              <hr />
              <div className='rating-buttons'>

                <button className='like-button' onClick={this.state.handleLike}>
                  <i class="fa-solid fa-thumbs-up"></i> Like {this.state.likes}
                </button>

                <button className='dislike-button' onClick={this.state.handleDislike}>
                  <i class="fa-solid fa-thumbs-down"></i> Dislike {this.state.dislikes}
                </button>
      
              </div>
              <div className='total-rating' >
                  Total ratings : {this.state.totalRatings}
                </div>
            </div>
          </>
        );
            
        }
    } export default ContentRating;


    


