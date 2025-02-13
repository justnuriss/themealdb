
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../axios/apiClient'
import Productlist from '../components/Productlist/Productlist'

function Search() {

const {value} = useParams()

const [product,setProduct] = useState([])



async function getSearchProduct() {
    try {
        const res = await apiClient.get(`/search.php?s=${value}`)

        setProduct(res.data.meals)
    } catch (error) {
        
    }
}

useEffect(() => {
    getSearchProduct()
}, [value])
  return (
    <div>
      <Productlist data={product}/>
    </div>
  )
}

export default Search
