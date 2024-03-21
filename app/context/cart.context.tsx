"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type CartContextType = {
    isCartOpen: boolean,
    setIsCartOpen:  Dispatch<SetStateAction<boolean>>
};

export const CartContext = createContext<CartContextType>({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {
        isCartOpen,
        setIsCartOpen
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}



