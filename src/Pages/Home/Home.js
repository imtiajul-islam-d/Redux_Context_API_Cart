import React from 'react';
import { useProducts } from '../../context/ProductProvider';

const Home = () => {
    const products = useProducts()
    console.log(products)
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;