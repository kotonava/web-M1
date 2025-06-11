// src/pages/ProductGrid.jsx

import React, { useEffect, useState } from "react";
import "./ProductGrid.scss";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fonction appelée au clic sur un produit
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Récupération des produits à partir du backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} onClick={() => handleClick(product._id)}>
          <ProductCard
            brand={product.brand}
            name={product.name}
            price={product.price}
            image={`http://localhost:5000${product.image}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
