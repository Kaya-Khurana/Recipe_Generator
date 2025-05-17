// js/display.js
export function displayRecipes(recipes) {
  const display = document.getElementById("recipeDisplay");
  display.innerHTML = "";

  if (recipes.length === 0) {
    display.innerHTML =
      "<p>No matching recipes found. Try different ingredients.</p>";
    return;
  }

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe-card";

    recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
        <h3>Steps:</h3>
        <ol>${recipe.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
      `;

    display.appendChild(recipeDiv);
  });
}
