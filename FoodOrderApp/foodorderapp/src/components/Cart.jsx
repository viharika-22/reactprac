import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContextProvider";
import { UserProgressContext } from "../store/UserProgressContext";
import { currencyFormater } from "../util/formatting";
import Button from "./UI/Button";
import CartItem from "./CartItem";

function Cart() {
  const crtCtx = useContext(CartContext);
  const userProgCtx = useContext(UserProgressContext);
  const totalPrice = crtCtx.items.reduce((totalCartPrice, item) => {
    return totalCartPrice + item.quantity * item.price * 20;
  }, 0);
  function handleCloseCart() {
    userProgCtx.hideCart();
  }
  function handleCheckout() {
    userProgCtx.showCheckout();
  }
  return (
    <Modal className="cart" open={userProgCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {crtCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrese={() => crtCtx.removeItem(item.id)}
            onIncrease={() => crtCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">
        Total Price :{currencyFormater.format(totalPrice)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {crtCtx.items.length>0 && (<Button onClick={handleCheckout}>Go to Checkout</Button>)}
      </p>
    </Modal>
  );
}

export default Cart;
