export const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
};

