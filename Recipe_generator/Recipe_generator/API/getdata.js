function renderRecipeCard(data) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Clear previous cards

  // If data is an array, render each; else, render single
  const recipes = Array.isArray(data) ? data : [data];

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h2>${recipe.TranslatedRecipeName || recipe.RecipeName}</h2>
      <div class="meta">
        <span><b>Cuisine:</b> ${recipe.Cuisine || ""}</span> |
        <span><b>Course:</b> ${recipe.Course || ""}</span> |
        <span><b>Diet:</b> ${recipe.Diet || ""}</span>
      </div>
      <div class="ingredients">
        <b>Ingredients:</b>
        <ul>
          ${(recipe.TranslatedIngredients || recipe.Ingredients || "")
            .split(",")
            .map((i) => `<li>${i.trim()}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="instructions">
        <b>Instructions:</b>
        <p>${recipe.TranslatedInstructions || recipe.Instructions || ""}</p>
      </div>
      <div>
        <b>Prep:</b> ${recipe.PrepTimeInMins || ""} min |
        <b>Cook:</b> ${recipe.CookTimeInMins || ""} min |
        <b>Total:</b> ${recipe.TotalTimeInMins || ""} min |
        <b>Servings:</b> ${recipe.Servings || ""}
      </div>
      <a href="${recipe.URL || "#"}" target="_blank">View Full Recipe</a>
    `;
    cardContainer.appendChild(card);
  });
}

function fetchAndRenderRecipe(query = "tomato") {
  fetch(`http://127.0.0.1:3000/?q=${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => {
      renderRecipeCard(data);
    })
    .catch((e) => {
      console.error(e);
      document.getElementById("cardContainer").innerHTML =
        "<div style='color:red'>Failed to fetch recipes.</div>";
    });
}

// Initial load
fetchAndRenderRecipe();

// Search button event
document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  if (query) fetchAndRenderRecipe(query);
});
