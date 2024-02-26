"use client"
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const getItemQuantity = (itemId) => {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        return item ? item.quantity : 0;
    };


    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
            if (itemExists) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }]
            }
        });
    };



    
    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((cartItem) => cartItem.id === itemId);
            if (itemExists && itemExists.quantity > 1) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter((cartItem) => cartItem.id !== itemId);
            }
        });
    };
    useEffect(() => {
        const updateTotalCost = () => {
            const total = cart.reduce((acc, currentItem) => {
                return acc + currentItem.price * currentItem.quantity;
            }, 0);
            setTotalCost(parseFloat(total.toFixed(2)));
        };
        updateTotalCost();
        
    }, [cart]);
    
    return (
        <CartContext.Provider
            value={{ cart, addToCart,removeFromCart, totalCost, getItemQuantity}}
        >
            {children}
        </CartContext.Provider>
    );

};

export const useCart = () => {
    return useContext(CartContext);
  };

  