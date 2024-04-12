import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {id, name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(id);
    

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(id);

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="price">$ {price}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;