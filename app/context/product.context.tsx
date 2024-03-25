"use client";
import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { ProductType } from "../type";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


type ProductContextType = {
    products: ProductType[],
}

export const ProductContext = createContext<ProductContextType>({
    products: []
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
        
    }, [])

    const value = {
        products
    }
    
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
