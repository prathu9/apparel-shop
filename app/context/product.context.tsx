"use client";
import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

type ProductType = {
    id: number | string,
    name: string,
    imageUrl: string,
    price: number
}

type ProductContextType = {
    products: ProductType[],
}

export const ProductContext = createContext<ProductContextType>({
    products: []
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);

    const value = {
        products
    }

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
