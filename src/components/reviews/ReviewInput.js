import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    
    this.state = {
      text: '',
    }
  }

    handleOnChange(event) {
      this.setState({
        text: event.target.value
      });
    }

    handleOnSubmit = event => {
      console.log(this.props);
      event.preventDefault();
      this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
      this.setState({
        text: '',
      });
    }
    
  render() {
    return (
      <div>
<form onSubmit={this.handleOnSubmit}>
<input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text}/>
<input type="submit" value="Add Review"/>
</form>
      </div>
    );
  }
};

export default ReviewInput;
