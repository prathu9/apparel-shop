"use client";
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import "./auth.styles.scss";
import { UserContext } from "../../context/user.context";

export default function AuthPage(){
    const {currentUser,checkUser} = useContext(UserContext);
    const router = useRouter();
    
    useEffect(() => {
        if(currentUser || checkUser){
            router.push('/');
        }
    }, [checkUser, currentUser, router]);

    if(checkUser && !currentUser){
        return <h1>Loading...</h1>
    }

    return(
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}