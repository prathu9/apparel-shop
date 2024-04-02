"use client";
import Image from "next/image";

import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";
import Link from "next/link";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async () =>{
        await signOutUser();
   }

    console.log("user", currentUser);
    return(
        <>
            <NavigationContainer>
                <LogoContainer href="/">
                    <Image
                        src="/crown.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        priority
                    />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink as={Link} href="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser? 
                        (
                            <NavLink onClick={signOutHandler}>
                                SIGN OUT
                            </NavLink>
                        ):(
                            <NavLink as={Link} href="/auth">
                            SIGN IN
                        </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
        </>
    )
}

export default Navigation;