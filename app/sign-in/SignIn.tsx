'use client';

import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        try{
            const {user} = await signInWithGooglePopup();
            createUserDocumentFromAuth(user);
        }
        catch(err){
            console.log(err);
        }
       
    }

    return(
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    )
}

export default SignIn;