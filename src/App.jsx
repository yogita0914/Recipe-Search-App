import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';  
import './App.css';  

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      const API_KEY = '1dc335c594922d00f167f83e3aae1ac4';
      const API_ID = 'e6ee807c'; 
      const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=vegetarian&app_id=${API_ID}&app_key=${API_KEY}`; // Default query is 'vegetarian'

      try {
        const response = await axios.get(API_URL);
        setRecipes(response.data.hits); 
      } catch (error) {
        console.error('Error fetching the default recipes', error);
      }
    };

    fetchDefaultRecipes();
  }, []);

  const viewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app">
      <h1 className="heading">Recipe Search App</h1>
      <RecipeSearch setRecipes={setRecipes} />
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} />
      ) : (
        <RecipeList recipes={recipes} viewRecipe={viewRecipe} />
      )}
    </div>
  );
}

export default App;
