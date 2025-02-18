import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../axios/apiClient';
import Productlist from '../Productlist/Productlist';

function CountrySearch() {
    const { country } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await apiClient.get(`/filter.php?a=${country}`);
                setProducts(res.data.meals);
            } catch (error) {
                console.error(error);
                setProducts([]); 
            }
        };
        fetchProducts();
    }, [country]);

    return (
        <div>
            <Productlist data={products} />
        </div>
    );
}

export default CountrySearch;
