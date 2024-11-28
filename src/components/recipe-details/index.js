import Link from "next/link";
import React from "react";

function RecipeDetailsItem({ recipeItem }) {
  return (
    <div>
      <Link href={"/recipes-list"}>Go to Recipes</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={recipeItem?.image}
              name={recipeItem?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipeItem?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {recipeItem?.mealType[0]}
              </p>
            </div>
            <div className="mt-5 ">
              <p className="text-xl text-gray-800">{recipeItem?.cuisine}</p>
            </div>
            <div className="mt-5 ">
              <h3 className="text-lg text-gray-700 font-bold">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 text-sm pl-4 text-gray-700">
                {recipeItem?.ingredients?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsItem;
