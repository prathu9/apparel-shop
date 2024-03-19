"use client";
import { createContext, useState, Dispatch, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

type UserContextType = {
    currentUser: any,
    setCurrentUser: Dispatch<any>
}

export const UserContext = createContext<UserContextType>({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {
        currentUser,
        setCurrentUser
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user: User) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
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

