import ReceipeList from "@/components/recipe-list";
import React from "react";

async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const result = await response.json();

    return result?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

async function Recipes() {
  const recipesList = await fetchRecipes();
  return <ReceipeList recipeList={recipesList} />;
}

export default Recipes;
