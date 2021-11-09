import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = "4a21796a";
  const APP_KEY = "48ed43236cc51c9847b294088f2146c6";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log('Effect has been run');
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=recipes&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    // console.log(data.hits)
    setRecipes(data.hits);
    console.log(data.hits)
  }

  return (
    <div className="App">
      <div><h1>FIND YOUR RECIPE!</h1></div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit"></button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
