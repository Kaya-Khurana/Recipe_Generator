// js/recipeGenerator.js
import { recipes } from "./data.js";

export function generateRecipes(userIngredients) {
  return recipes.filter((recipe) =>
    userIngredients.some((ingredient) =>
      recipe.ingredients.some((item) => item.toLowerCase().includes(ingredient))
    )
  );
}
