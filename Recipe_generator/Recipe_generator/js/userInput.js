export function getUserPreferences() {
  const mealType = document.getElementById("mealType").value;
  const ingredient = document
    .getElementById("ingredient")
    .value.trim()
    .toLowerCase();
  return { mealType, ingredient };
}
