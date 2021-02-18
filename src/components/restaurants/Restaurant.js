import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {

    const { restaurant } = this.props;

    return (
        <li key={restaurant.id} id={restaurant.id}>
          {restaurant.text}{" "}
          <button onClick={id => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview} />
        </li>
    );
  }
};

export default Restaurant;