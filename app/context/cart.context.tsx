"use client";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { CartItemType, ProductType } from "../type";

type CartContextType = {
    isCartOpen: boolean,
    setIsCartOpen:  Dispatch<SetStateAction<boolean>>,
    cartItems: CartItemType[],
    addItemToCart: (productToAdd: ProductType) => void,
    cartCount: number,
    removeItemFromCart: (cartItemId: string | number) => void,
    clearItemFromCart: (cartItemId: string | number) => void,
    cartTotal: number
};

export const CartContext = createContext<CartContextType>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0
});

const addCartItem = (cartItems: CartItemType[], productToAdd: ProductType) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if(existingCartItem){
        existingCartItem.quantity++;
        return [...cartItems]
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeItem = (cartItems: CartItemType[], cartItemId: string | number) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemId);

    if(existingCartItem.quantity > 1){
        existingCartItem.quantity--;
        return [...cartItems];
    }

    return cartItems.filter(cartItem => cartItem.id !== cartItemId);
}

const clearCartItem = (cartItems: CartItemType[], cartItemId: string | number) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemId);
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => item.quantity + total, 0));
    }, [cartItems]);

    useEffect(() => {
        setCartTotal(cartItems.reduce((total, {quantity, price}) => (quantity*price)+total, 0));
    },[cartItems]);

    const addItemToCart = (productToAdd: ProductType) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemId: string | number) => {
        setCartItems(removeItem(cartItems, cartItemId));
    }

    const clearItemFromCart = (cartItemId: string | number) => {
        setCartItems(clearCartItem(cartItems, cartItemId));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}



