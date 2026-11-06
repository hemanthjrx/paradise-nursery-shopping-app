import { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import ProductList from "./ProductList";
import "./App.css";

function Navbar({ onNavigate }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate("home")}>
        Paradise Nursery
      </button>

      <nav>
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("plants")}>Plants</button>
        <button className="cart-link" onClick={() => onNavigate("cart")}>
          🛒 Cart <span>{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

function LandingPage({ onGetStarted }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to your green escape</p>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful houseplants that turn everyday rooms into calm,
            thriving spaces.
          </p>
          <button className="primary-button" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar onNavigate={setPage} />

      {page === "home" && (
        <LandingPage onGetStarted={() => setPage("plants")} />
      )}

      {page === "plants" && <ProductList />}

      {page === "cart" && (
        <CartItem onContinueShopping={() => setPage("plants")} />
      )}
    </div>
  );
}