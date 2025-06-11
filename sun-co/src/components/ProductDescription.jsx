// src/components/ProductDescription.jsx
import React from "react";
import "../styles/product-description.scss";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <h4>Description</h4>
      <p>
        Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile
        with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.
      </p>
      <ul>
        <li>Regular fit</li>
        <li>Lace closure</li>
        <li>Rubber outsole with vulcanized look</li>
        <li>Imported</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
