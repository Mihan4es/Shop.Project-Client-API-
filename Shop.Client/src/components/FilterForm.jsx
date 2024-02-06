import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
    const [filter, setFilter] = useState({ title: '', priceFrom: '', priceTo: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filter);
    };

    const handleResetFilter = () => {
        setFilter({ title: '', priceFrom: '', priceTo: '' });
        onFilterChange({});
    };

    return (
        <form className="filter-form" onSubmit={handleFilterSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={filter.title}
                onChange={handleInputChange}
            />

            <label htmlFor="priceFrom">Price from:</label>
            <input
                type="text"
                id="priceFrom"
                name="priceFrom"
                value={filter.priceFrom}
                onChange={handleInputChange}
            />

            <label htmlFor="priceTo">Price to:</label>
            <input
                type="text"
                id="priceTo"
                name="priceTo"
                value={filter.priceTo}
                onChange={handleInputChange}
            />

            <button type="submit">Search</button>
            <button type="button" onClick={handleResetFilter}>
                Reset filter
            </button>
        </form>
    );
};

export default FilterForm;