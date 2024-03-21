import Image from "next/image";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    return(
        <div className="cart-icon-container" onClick={() => setIsCartOpen(!isCartOpen)}>
            <Image
                src="/shopping-bag.svg"
                width={24}
                height={24}
                alt="cart icon"
            />
            <span className="item-count">100</span>
        </div>
    );
}

export default CartIcon;