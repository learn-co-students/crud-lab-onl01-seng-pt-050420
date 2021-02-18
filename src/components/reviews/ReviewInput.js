import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Review: </label><br />
          <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/><br />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default ReviewInput;
