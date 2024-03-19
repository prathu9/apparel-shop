"use client";
import Image from "next/image";
import Link from "next/link";

import "./Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    const signOutHandler = async () =>{
        await signOutUser();
   }

    console.log("user", currentUser);
    return(
        <>
            <div className="navigation">
                <Link className="logo-container" href="/">
                    <Image
                        src="/crown.svg"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" href="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser? 
                        (
                            <span className="nav-link" onClick={signOutHandler}>
                                SIGN OUT
                            </span>
                        ):(
                            <Link className="nav-link" href="/auth">
                            SIGN IN
                        </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Navigation;