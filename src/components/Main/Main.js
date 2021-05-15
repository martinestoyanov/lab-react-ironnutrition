import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';
import foods from '../../foods.json';
import AddFood from '../AddFood/AddFood';

export default class Main extends Component {
  state = {
    allFoods: foods,
    formDisplayed: false,
  };

  createNewFoodEntry = (newFoodObject) => {
    const copy = [...this.state.allFoods];
    copy.unshift(newFoodObject);
    this.setState({ allFoods: copy, formDisplayed: false });
  };

  toggleForm = () => {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  };

  render() {
    return (
      <div>
        IronNutrition
        <button onClick={this.toggleForm}>Add Food</button>
        <div>
          <AddFood />
          {foods.map((eachFood) => {
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
