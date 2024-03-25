"use client";
import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
// import { CategoriesType } from "../type";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { CategoryItemType } from "../type.js";


type CategoriesContextType = {
    categoriesMap: {
        [key: string]: CategoryItemType[]
    }
}

export const CategoriesContext = createContext<CategoriesContextType>({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMapResult = await getCategoriesAndDocuments();
            console.log(categoryMapResult);
            setCategoriesMap(categoryMapResult);
        }
        getCategoriesMap();
        
    }, [])

    const value = {
        categoriesMap
    }
    
    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
