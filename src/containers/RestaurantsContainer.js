import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant.bind(this)} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant.bind(this)} addReview={this.props.addReview.bind(this)} deleteReview={this.props.deleteReview.bind(this)} />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({ type: "ADD_RESTAURANT", restaurant }),
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id }),
    addReview: review => dispatch({ type: "ADD_REVIEW", review }),
    deleteReview: review => dispatch({ type: "DELETE_REVIEW", review })
  }
}

export default connect(null, mapDispatch)(RestaurantsContainer);