import Image from "next/image";
import {CartIconContainer,ItemCount} from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    return(
        <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
                <Image
                    src="/shopping-bag.svg"
                    width={24}
                    height={24}
                    alt="cart icon"
                />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;