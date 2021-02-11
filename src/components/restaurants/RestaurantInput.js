import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }
  
  handleOnChange = (e) => {
    this.state.text = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.state.text = "";
  }
  
  render() {
  
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
