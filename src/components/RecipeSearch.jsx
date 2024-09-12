import React, { useState } from 'react';
import styles from './RecipeSearch.module.css';
import axios from 'axios';

const RecipeSearch = ({ setRecipes }) => {
  const [query, setQuery] = useState('');

  const searchRecipes = async (e) => {
    e.preventDefault();
    const API_KEY = '1dc335c594922d00f167f83e3aae1ac4'; 
    const API_ID = 'e6ee807c'; 
    const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    try {
      console.log('Fetching data from:', API_URL); 
      const response = await axios.get(API_URL);
      console.log('Response data:', response.data); 
      setRecipes(response.data.hits); 
    } catch (error) {
      console.error('Error fetching the recipes:', error.message);
    }
  };

  return (
    <form onSubmit={searchRecipes} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default RecipeSearch;
