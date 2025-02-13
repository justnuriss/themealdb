import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaSpinner, FaExclamationTriangle } from 'react-icons/fa' 
import './S2info.css'

const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" 

function S2info() {
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(false)
  const { idMeal } = useParams() 

  async function getMeal() {
    setLoading(true)
    setError(false)
    try {
      const res = await axios.get(API + idMeal) 
      console.log(res);
      setMeal(res.data.meals[0] )
    } catch (error) {
      setError(true) 
    } finally {
      setLoading(false) 
    }
  }

  useEffect(() => {
    getMeal()
  }, [idMeal]) 

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner-icon" />
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <FaExclamationTriangle className="error-icon" />
        <p>There was an error loading the product. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-image">
          <img src={meal.strMealThumb} alt="" />
        </div>

        <div className="product-info">
          <h1 className="product-title">{meal.strMeal}</h1>
          <p className="product-description">{meal.strInstructions}</p>
          <div className="product-price">
            <span className="price">Price: 560 som</span>
          </div>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default S2info