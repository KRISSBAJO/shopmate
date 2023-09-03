
import "./CartCard.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { CheckoutCard } from "./CheckoutCard";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <div className="productInfo">
        <p className="productName">{name}</p>
        <p className="productPrice">${price}M</p>
      </div>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
      <div className="divider">
      <CheckoutCard cartItems={[product]} />
      </div>
      
    </div>
  );
};

