import React, { useContext } from 'react';
import { PRODUCT_CONTEXT } from '../../context/ProductProvider';

const Home = () => {
    const {products} = useContext(PRODUCT_CONTEXT)
    console.log(products)
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;