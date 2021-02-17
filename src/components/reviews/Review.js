import React, { Component } from 'react';

class Review extends Component {

  handleClick = e => {
    this.props.deleteReview(this.props.review)
  }

  render() {
    const { review } = this.props;

    // debugger

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={e => this.handleClick(e)}> X </button>
      </div>
    );
  }

};

export default Review;
