"use client";
import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";
import { ProductType } from "../type";


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
