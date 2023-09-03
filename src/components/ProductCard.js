import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.catList);
  const {name, price, image} = product;


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}M</p>
        { cartList.find((item) => item.id === product.id) ? (
        <button onClick={() => dispatch(remove(product))} className="removeButton">Remove</button>
        ) : (
        <button onClick ={() => dispatch(add(product))} className="addButton">Add To Cart</button>
        )}
      </div>
    </div>
  )
}
