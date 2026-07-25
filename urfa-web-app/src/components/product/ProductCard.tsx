import React from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            <button onClick={onAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;