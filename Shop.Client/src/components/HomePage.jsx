import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getProducts} from '../api';
import '../App.css'

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();

                if (Array.isArray(productsData) && productsData.length > 0) {
                    const totalPrice = productsData.reduce((acc, product) => acc + product.price, 0);
                    setProducts(productsData);
                    setTotalPrice(totalPrice);
                } else {
                    console.error('Invalid products data:', productsData);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="HomePage-container">
            <h1 className="HomePage-title">Shop.Client</h1>
            <p className="HomePage-description">{`В базе данных находится ${products.length} товаров,
            общей стоимостью ${totalPrice}`}</p>
            <div className="button-container">
                <Link to="/products-list" className="HomePage-link">
                    <button className="HomePage-button">Перейти к списку товаров</button>
                </Link>
            <a href="http://localhost:3000/admin/auth/login" className="HomePage-link" target="_blank" rel="noopener noreferrer">
                <button className="HomePage-button">Перейти в систему администрирования</button>
            </a>
        </div>
        </div>
    );
};

export default HomePage;