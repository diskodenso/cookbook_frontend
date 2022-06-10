import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import Landing from "./Landing";
import Recipes from "./Recipes";
import About from "./About";
const RouterConfig = ({ recipes }) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/recipes" element={<Recipes recipes={recipes} />} />
      <Route path="/recipes/:id" element={<Recipe recipes={recipes} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export default RouterConfig;
