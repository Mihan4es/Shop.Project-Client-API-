import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductListPage from './components/ProductListPage';
import ProductDetailsPage from './components/ProductDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products-list" element={<ProductListPage />} />
                <Route path="/:id" element={<ProductDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;