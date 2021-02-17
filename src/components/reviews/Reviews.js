import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // const restaurantList = restaurants.map(restaurant => {
    //   return (
      //     <Restaurant
      //         key={restaurant.id}
      //         restaurant={restaurant}
      //         deleteRestaurant={deleteRestaurant}
      //     />
      //   )
      // });
      render() {
        console.log(this.props)
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;