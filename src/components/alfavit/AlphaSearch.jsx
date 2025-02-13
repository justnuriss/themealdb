import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../axios/apiClient'
import Productlist from '../Productlist/Productlist';


function AlphaSearch() {
  const { letter } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await apiClient.get(`/search.php?f=${letter}`);
      setProducts(res.data.meals);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [letter]);

  return (
    <div>
      <Productlist data={products} />
    </div>
  );
}

export default AlphaSearch;