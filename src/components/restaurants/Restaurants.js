import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  renderRestaurants = restaurants => {
    // debugger
    return (
      restaurants.map(restaurant => {
        return <Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} />
      })
    )
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants(this.props.restaurants)}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);