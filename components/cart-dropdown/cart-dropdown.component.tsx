import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useRouter } from "next/navigation";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const router = useRouter();

  const goToCheckoutPage = () => {
    setIsCartOpen(false);
    router.push("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
