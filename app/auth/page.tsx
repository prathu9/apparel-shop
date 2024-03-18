import SignUpForm from "../components/sign-up/sign-up.component";
import SignInForm from "../components/sign-in/sign-in.component";

import "./auth.styles.scss";

export default function AuthPage(){
    
    return(
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}