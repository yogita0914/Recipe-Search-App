import React from 'react';
import styles from './RecipeDetails.module.css';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} className={styles.image} />
      
      <h2 className={styles.subtitle}>Ingredients:</h2>
      <ul className={styles.list}>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      
      <h2 className={styles.subtitle}>Instructions:</h2>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View full recipe
      </a>
    </div>
  );
};

export default RecipeDetails;  
