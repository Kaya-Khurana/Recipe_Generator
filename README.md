# Recipe Generator
The Recipe Generator is a web application that helps users discover random recipes based on their preferred cuisine and dietary restrictions. Built with HTML, CSS, and JavaScript, it features a modular architecture for easy maintenance and scalability. Users can select a cuisine (e.g., Italian, Mexican, Indian) and dietary preferences (e.g., vegetarian, vegan, gluten-free) to generate a recipe with details like title, preparation time, ingredients, and instructions.
Features

# Customizable Preferences: Choose cuisine and dietary restrictions (vegetarian, vegan, gluten-free).
# Random Recipe Generation: Generates a random recipe from a predefined dataset based on user input.
# Responsive Design: Clean, mobile-friendly interface with a modern look.
# Error Handling: Displays a message if no recipes match the user's criteria.
# Modular Architecture: Organized into five modules for better code maintainability.

# Technologies Used

# HTML5: For the structure of the web application.
# CSS3: For styling and responsive design.
# JavaScript (ES6 Modules): For interactivity, data management, and DOM manipulation.

# Installation
To run the Recipe Generator locally, follow these steps:
Clone the Repository:git clone https://github.com/kaya-khurana/recipe-generator.git


# Navigate to the Project Directory:cd recipe-generator


# Open the Application:
Option 1: Open index.html directly in a web browser (e.g., Chrome, Firefox).
Option 2: Serve the project using a local server for proper ES6 module support:npm install -g live-server
live-server
# This will launch the application in your default browser.



# Note: ES6 modules require a server (local or hosted) to work due to CORS restrictions. Using live-server or a similar tool is recommended.
Usage

1.Open the application in a web browser.
2.Select a cuisine from the dropdown menu (e.g., Italian, Mexican, Indian, or All Cuisines).
3.Check any dietary preferences (Vegetarian, Vegan, Gluten-Free) as needed.
4.Click the Generate Recipe button to display a random recipe matching your criteria.
5.View the recipe details, including title, preparation time, ingredients, and instructions.
6.If no recipes match your preferences, an error message will appear.

# Module Details

# Data Module (data.js): Stores and provides access to the recipe dataset.
# User Input Module (userInput.js): Captures user preferences from the form.
# Recipe Generation Module (recipeGenerator.js): Filters recipes and selects a random one.
# Display Module (display.js): Updates the DOM with recipe details or error messages.
# Styling Module (styles.css): Defines the visual design and responsiveness.

# Contributing
Contributions are welcome! To contribute:

# Fork the repository.
Create a new branch:git checkout -b feature/your-feature
Make your changes and commit them:git commit -m "Add your feature"
Push to the branch:git push origin feature/your-feature
Open a pull request with a description of your changes.
Please ensure your code follows the project's coding style and includes appropriate comments.
Happy cooking with the Recipe Generator! 🍳
