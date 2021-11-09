import './App.css';

function App() {
  const APP_ID = "4a21796a";
  const APP_KEY = "48ed43236cc51c9847b294088f2146c6";

  const exRequest = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`;


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
