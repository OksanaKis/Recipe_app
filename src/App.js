import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const APP_ID = "4a21796a";
  const APP_KEY = "48ed43236cc51c9847b294088f2146c6";

  // const []

  useEffect(() => {
    console.log('Effect has been run');
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=recipes&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <div><h1>FIND YOUR RECIPE!</h1></div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  );
}

export default App;
