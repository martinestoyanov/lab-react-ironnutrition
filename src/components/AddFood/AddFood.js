import React, { Component } from 'react';

export default class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  updateInput = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state)
  };

  render() {
    return (
      <form>
        <p>Food Name</p>
        <input type="text" name="name" onChange={this.updateInput}></input>
        <p>Calories</p>
        <input
          type="number"
          name="calories"
          onChange={this.updateInput}
        ></input>
        <p>Image Url</p>
        <input type="text" name="image" onChange={this.updateInput}></input>
      </form>
    );
  }
}
