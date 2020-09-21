import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../data/store";
import { getBasketTotal } from "../../data/reducer";

export default function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length || 0} items): <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperation={true}
        prefix={"₹ "}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
