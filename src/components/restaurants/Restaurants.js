import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
 
  
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const restList = restaurants.map(rest => {
      return (
      <Restaurant
        key={rest.id}
        restaurant={rest}
        deleteRestaurant={deleteRestaurant}
      />
    )
    })
    return(
      <ul>
        {restList}
      </ul>
    );
  }
};

export default Restaurants;