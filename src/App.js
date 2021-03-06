import React from "react";
import { useState, useEffect } from "react";
import { client } from "./client";
import Recipe from "./components/Recipe";
import RouterConfig from "./components/RouterConfig";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState();

  console.log(recipes);

  useEffect(() => {
    client
      .getEntries({ order: "sys.createdAt" })
      .then((response) => {
        console.log(response.items);
        setRecipes(response.items);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Thats our awesome Cookbook</h1>
      </header>
      <main>
        <Recipe />
        {!recipes && "Loading...."}
        {error && <h2>Oh no, something went wrong</h2>}
        <div className="block">
          {recipes && <RouterConfig recipes={recipes} />}
        </div>
      </main>
      <footer>
        <h4>we want to have a footer here</h4>
      </footer>
    </div>
  );
};

export default App;
