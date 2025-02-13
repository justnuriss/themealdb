import React from 'react'
import './productlist.css'
import Card from './card/Card'


function Productlist({data}) {
  return (
    <div className='food container'>
      {
        data.map((item) => (    
            <Card key={item.idMeal} food = {item}/>
        ))
      }
    </div>
  )
}

export default Productlist
