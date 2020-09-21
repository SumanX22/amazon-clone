import React from "react";
import "./Product.css";

import { useStateValue } from "../../data/store";
import Rating from "../Rating/Rating";

export default function Product({ id, title, price, image, rating }) {
  const [{ basket }, disptach] = useStateValue();

  const addToBasket = () =>
    disptach({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating rating={rating} />
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBasket}> Add to cart</button>
    </div>
  );
}
