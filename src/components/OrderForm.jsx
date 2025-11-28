import { useState } from "react";
import OrderCheckout from "./OrderCheckout";
import {toppingOptions, sizePrices} from './data'
console.log('toppingOptions', toppingOptions)

function OrderForm() {
  const [size, setSize] = useState(0)
  const [crust, setCrust] = useState('')
  const [topping1, setTopping1] = useState('')
  const [topping2, setTopping2] = useState('')

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <form className="orderForm">
        <select name="crust" id="crust">
          <option value="">Select Topping</option>
          {toppingOptions && toppingOptions.map(top => (
          <option>{top}</option>
          ))}
        </select>
      </form>

      <OrderCheckout />
    </div>
  );
}

export default OrderForm;
