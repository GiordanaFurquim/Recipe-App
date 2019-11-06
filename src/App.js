import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

const API_KEY = "b2426c698473d5b2f9ec23223aef62f1";

class App extends Component {
  getRecipe = async (e) => {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;
    
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`);
    
    const data = await api_call.json();
    console.log(data);
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
