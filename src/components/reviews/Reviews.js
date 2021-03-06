import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const relatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId) 

    const reviews = relatedReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>);
    return (
      <ul>
        Reviews
        <br/>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;