import React, { useState } from "react";
import "./CartCard.css";

export const CheckoutCard = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item.price, 0)
  );

  return (
    <div className="checkoutCard">
      <div className="checkoutInfo">
        <p>Total Tax: $12,000</p>
        <p>Grand Total: ${totalPrice + 1}M</p>
      </div>
      <button className="checkoutButton">Checkout</button>
    </div>
  );
};
