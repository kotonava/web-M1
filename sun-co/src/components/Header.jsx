import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./Header.scss";
import logo from "../assets/images/logostar.jpg";
import { CartContext } from "./CartContext";
import CartModal from "./CartModal";

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); 

  
  const showCartButton = location.pathname === "/" || location.pathname.startsWith("/product");

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width="40" />
        <span>SOA NY FIARAHANTSIKA</span>
      </div>

      {showCartButton && (
        <button className="cart-button" onClick={() => setShowModal(true)}>
          🛒 Cart ({cartCount})
        </button>
      )}

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </header>
  );
};

export default Header;
