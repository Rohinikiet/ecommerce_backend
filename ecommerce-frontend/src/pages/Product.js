import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default Product;
