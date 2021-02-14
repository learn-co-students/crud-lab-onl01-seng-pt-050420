import React, { Component } from 'react';

class RestaurantInput extends Component {

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
    this.props.addRestaurant(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return (  
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Restaurant: </label><br />
          <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
