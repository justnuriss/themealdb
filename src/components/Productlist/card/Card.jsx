import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card({ food }) {
  return (
    <div>
    
        <Link to={`/info/${food.idMeal}`} className='meals' key={food.idMeal}>
          <div>
            <img className='meal-img' src={food.strMealThumb} alt={food.strMeal} />
          </div>
          <h2>{food.strMeal}</h2>
        </Link>
    </div>
  );
}

export default Card;