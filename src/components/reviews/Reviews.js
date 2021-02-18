import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
 
class Reviews extends Component {

  renderReviews = reviews => {

    let restaurantReviews = reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    return (
      restaurantReviews.map(review => {
        return <Review review={review} deleteReview={this.props.deleteReview} />
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderReviews(this.props.reviews)}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Reviews);