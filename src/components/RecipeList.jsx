import React from 'react';
import RecipeCard from './RecipeCard';
import styles from './RecipeList.module.css';

const RecipeList = ({ recipes, viewRecipe }) => {
  return (
    <div className={styles.grid}>
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.recipe.uri || index} recipe={recipe.recipe} viewRecipe={viewRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
