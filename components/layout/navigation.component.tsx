"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import "./navigation.styles.scss";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

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
                    <CartIcon />
                </div>
                {
                    isCartOpen && <CartDropdown />
                }
            </div>
        </>
    )
}

export default Navigation;