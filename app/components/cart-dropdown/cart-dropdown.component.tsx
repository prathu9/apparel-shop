import { useContext } from "react";
import Button from "../button/button.component";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useRouter } from "next/navigation";

const CartDropdown = () => {
    const {cartItems, setIsCartOpen} = useContext(CartContext);
    const router = useRouter();

    const goToCheckoutPage = () => {
        setIsCartOpen(false);
        router.push("/checkout");
    }
    
    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)):
                (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;