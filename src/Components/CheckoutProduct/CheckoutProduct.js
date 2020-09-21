import React from "react";
import "./CheckoutProduct.css";
import Rating from "../Rating/Rating";
import { useStateValue } from "../../data/store";

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [_, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating rating={rating} />
        <button onClick={removeFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
}
