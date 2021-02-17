import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    // debugger
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews restaurant={this.props.restaurant} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

export default ReviewsContainer;
