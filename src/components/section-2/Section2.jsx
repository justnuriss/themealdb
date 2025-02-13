import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './section2.css';
import { Link } from 'react-router-dom';

const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";

function Section2() {


    return (
        <div className='content'>
            {meals.map((meal) => (
                    <Link to={`/section2/${meal.idMeal}`}>
                <div key={meal.idMeal} className="meal-card">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h3>{meal.strMeal}</h3>
                </div>
                    </Link>
            ))}
        </div>
    );
}

export default Section2;

