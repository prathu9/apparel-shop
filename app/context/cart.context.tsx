"use client";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { CartItemType, ProductType } from "../type";
import CartItem from "../components/cart-item/cart-item.component";

type CartContextType = {
    isCartOpen: boolean,
    setIsCartOpen:  Dispatch<SetStateAction<boolean>>,
    cartItems: CartItemType[],
    addItemToCart: (productToAdd: ProductType) => void,
    cartCount: number
};

export const CartContext = createContext<CartContextType>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

const addCartItem = (cartItems: CartItemType[], productToAdd: ProductType) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if(existingCartItem){
        existingCartItem.quantity++;
        return [...cartItems]
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((total, item) => item.quantity + total, 0));
    }, [cartItems])

    const addItemToCart = (productToAdd: ProductType) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}



