import './App.css'
import React, { Component } from 'react'
import FoodBox from './Components/FoodBox'
import Search from './Components/search'
import FoodData from '../resources/FoodData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nutri: {
        Key: "",
        description: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      nutri: {
        Key: Date.now(),
        description: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Search input={this.handleInput} />
        {FoodData.filter((yo) => {
          if (this.state.nutri.description === "") {
            return yo; 
          } else if (
            yo.name.toLowerCase().includes(this.state.nutri.description.toLowerCase())
          ) {
            return yo;
          }
          return false;
        }).map((good) => (
          <div className="eachElement" key={good.id}>
            <FoodBox foodData={good} input={this.handleInput}/>
          </div>
        ))}
      </div>
    );
  }
}
export default App