import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product Listings</h1>
            <div>
                {products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
