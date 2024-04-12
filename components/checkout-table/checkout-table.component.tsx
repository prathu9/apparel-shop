"use client";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-table.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutTable = () => {
  const { cartItems, cartTotal} =
    useContext(CartContext);

  return (
    <>
      <div className="checkout-header">
        <div className="header-row">
          <span>Product</span>
        </div>
        <div className="header-row">
          <span>Description</span>
        </div>
        <div className="header-row">
          <span>Price</span>
        </div>
        <div className="header-row">
          <span>Quantity</span>
        </div>
        <div className="header-row">
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
      <span className="total">Total: ${cartTotal}</span>
    </>
  );
};

export default CheckoutTable;
