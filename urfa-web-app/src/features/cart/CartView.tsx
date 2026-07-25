import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import { formatPrice } from '../../utils/formatPrice';

const CartView: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-view">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Price: {formatPrice(item.price)}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {formatPrice(totalAmount)}</h3>
        </div>
    );
};

export default CartView;