import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./CartSlice";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your cart is empty</h1>
        <p>Add a few lovely plants and come back when you are ready.</p>
        <button className="primary-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="page-heading">
        <p className="eyebrow">Your Paradise Nursery order</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Unit price: ${item.price.toFixed(2)}</p>
                <p className="item-total">
                  Item total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Total amount</span>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>

          <button
            className="primary-button"
            onClick={() =>
              setCheckoutMessage("Coming Soon! Checkout will be available shortly.")
            }
          >
            Checkout
          </button>

          <button className="secondary-button" onClick={onContinueShopping}>
            Continue Shopping
          </button>

          {checkoutMessage && (
            <p className="checkout-message">{checkoutMessage}</p>
          )}
        </aside>
      </div>
    </main>
  );
}