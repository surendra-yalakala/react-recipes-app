import RecipeDetailsItem from "@/components/recipe-details";
import React from "react";

async function fetchRecipeDetails(recipeId) {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function RecipeDetails({ params }) {
  const recipeParams = await params;
  const recipeDetails = await fetchRecipeDetails(recipeParams?.details);

  return <RecipeDetailsItem recipeItem={recipeDetails} />;
}

export default RecipeDetails;
