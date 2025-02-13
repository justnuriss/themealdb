import React from 'react'
import './card.css'
function Card({food}) {
  return (
    <div>
             <div className='meals' key={food.idMeal}>
                    <div>
                        <img className='meal-img' src={food.strMealThumb} alt={food.strMeal} />
                    </div>
                    <h2>{food.strMeal}</h2>
                    

                </div>
    </div>
  )
}

export default Card
