import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick = (id) => {
    this.props.deleteRestaurant(id);
  }

  render() {
    const restaurant = this.props.restaurant;


    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick(restaurant.id)}> Delete Restaurant </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
