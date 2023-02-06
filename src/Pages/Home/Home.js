import React from 'react';
import { useProducts } from '../../context/ProductProvider';

const Home = () => {
    const {products, dispatch} = useProducts()
    console.log(products, dispatch)
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;