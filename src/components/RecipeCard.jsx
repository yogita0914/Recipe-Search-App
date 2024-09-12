import React from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe, viewRecipe }) => {
  return (
    <div className={styles.recipeCard}>
      <img src={recipe.image} alt={recipe.label} className={styles.recipeImage} />
      <h2 className={styles.recipeTitle}>{recipe.label}</h2>
      <button
        onClick={() => viewRecipe(recipe)}
        className={styles.viewButton}
      >
        View Recipe
      </button>
    </div>
  );
};

export default RecipeCard;
