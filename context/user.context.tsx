"use client";
import { createContext, useState, Dispatch, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

type UserContextType = {
    currentUser: any,
    setCurrentUser: Dispatch<any>,
    checkUser: boolean
}

export const UserContext = createContext<UserContextType>({
    currentUser: null,
    setCurrentUser: () => null,
    checkUser: true
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const value = {
        currentUser,
        setCurrentUser,
        checkUser: isLoading
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user: User) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setIsLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

