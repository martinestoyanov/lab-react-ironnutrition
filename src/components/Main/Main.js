import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';
import foods from '../../foods.json';
import AddFood from '../AddFood/AddFood';
import Search from '../Search/Search';

export default class Main extends Component {
  state = {
    allFoods: foods,
    formDisplayed: false,
  };

  createNewFoodEntry = (newFoodObject, e) => {
    e.preventDefault();
    const copy = [...this.state.allFoods];
    copy.unshift(newFoodObject);
    console.log(copy);
    this.setState({ allFoods: copy, formDisplayed: false });
  };

  toggleForm = () => {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  };

  render() {
    return (
      <div>
        <Search executeSearch={this.filterResults} />

        <button onClick={this.toggleForm}>Add Food</button>
        <div>
          {this.state.formDisplayed && (
            <AddFood create={this.createNewFoodEntry} />
          )}
          {this.state.allFoods.map((eachFood) => {
            return (
              <FoodBox
                name={eachFood.name}
                calories={eachFood.calories}
                image={eachFood.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
