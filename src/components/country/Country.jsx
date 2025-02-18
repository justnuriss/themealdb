import React from 'react';
import './country.css';
import { Link } from 'react-router-dom';
import { flag } from '../../data/flag';



const imageAPI = "https://www.themealdb.com/images/icons/flags/big/64";

function Country() {
    return (
        <div className='CountryContainer container'>
            <div className="CountryContent">
                {
                flag.map((item, index) => (
                    <Link key={index} to={`/country/${item.str}`}>
                        <img src={`${imageAPI}/${item.title}.png`} alt={item.str} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Country;

