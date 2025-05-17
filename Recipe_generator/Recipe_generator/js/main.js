// js/main.js
import { generateRecipes } from "./recipeGenerator.js";
import { displayRecipes } from "./display.js";

document.getElementById("preferenceForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document
    .getElementById("ingredient")
    .value.trim()
    .toLowerCase();

  if (!input) return;

  const ingredients = input.split(",").map((i) => i.trim().toLowerCase());
  const matched = generateRecipes(ingredients);
  displayRecipes(matched);
});
