import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div className="cardbody" key={recipe.sys.id}>
          <img src={recipe.fields.image.fields?.file.url} alt="" width="100%" />
          <p>{recipe.fields.description}</p>
          <Link to={`../${recipe.sys.id}`}>
            <button id="btn-card"> Read full recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
