import React,{useState,useEffect} from 'react'
import Paypal from '../components/paypal/Paypal'
import Section2 from '../components/section-2/Section2'
import './home.css'
import Productlist from '../components/Productlist/Productlist'
import apiClient from '../axios/apiClient'

function Home() {

const [list,setList] = useState([])

async function getList() {
  try {
    const res = await apiClient.get(`/search.php?s=a`)

    console.log(res);
    setList(res.data.meals)

    
  } catch (error) {
    
  }
}

useEffect(() => {
  getList()
},[] )

  return (
    <div className='home-content'>
      <div className="section-1 container">
    <Paypal/>
      </div>
    <div className="section-2 container">
      <h1>Latest Meals</h1>
        <Productlist data={list}/>
        <hr />
    </div>
  
    </div>
  )
}

export default Home
