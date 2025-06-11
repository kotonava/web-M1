// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../components/CartContext";
// import QuantitySelector from "../components/QuantitySelector";
// import ProductDescription from "../components/ProductDescription";
// import "../styles/product.scss";

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [error, setError] = useState("");
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Produit non trouvé");
//         return res.json();
//       })
//       .then((data) => setProduct(data))
//       .catch((err) => setError(err.message));
//   }, [id]);

//   if (error) return <div>{error}</div>;
//   if (!product) return <div>Chargement...</div>;

//   return (
//     <div className="product-page">
//       <main className="product-main">
//         <div className="left">
//           <img src={`http://localhost:5000${product.image}`} alt={product.name} className="main-image" />
//         </div>
//         <div className="right">
//           <h2>{product.brand}</h2>
//           <p className="model">{product.name}</p>
//           <h3 className="price">Ar {product.price}</h3>

//           <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//           <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
//             Ajouter au panier
//           </button>
//         </div>
//       </main>

//       <section className="product-details">
//         <ProductDescription />
//         {product.image2 && (
//           <div className="extra-image">
//             <img src={`http://localhost:5000${product.image2}`} alt="Vue extra" />
//           </div>
//         )}
//       </section>

//       <footer>
//         <div className="logo-footer">🌞 SUN CO.</div>
//         <p>© 2023 dot.cards test task. Tous droits réservés.</p>
//         <div className="social-icons">
//           <span>📷</span>
//           <span>🐦</span>
//           <span>▶️</span>
//         </div>
//       </footer>
//     </div>
//   );
// };


import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import QuantitySelector from "../components/QuantitySelector";
import ProductDescription from "../components/ProductDescription";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../styles/product.scss";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produit non trouvé");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setOpenSnackbar(true); // ouvrir la notification
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (error) return <div>{error}</div>;
  if (!product) return <div>Chargement...</div>;

  return (
    <div className="product-page">
      <main className="product-main">
        <div className="left">
          <img
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
            className="main-image"
          />
        </div>
        <div className="right">
          <h2>{product.brand}</h2>
          <p className="model">{product.name}</p>
          <h3 className="price">Ar {product.price}</h3>

          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <button className="add-to-cart" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </main>

      <section className="product-details">
        <ProductDescription />
        {product.image2 && (
          <div className="extra-image">
            <img
              src={`http://localhost:5000${product.image2}`}
              alt="Vue extra"
            />
          </div>
        )}
      </section>

      <footer>
        <div className="logo-footer">🌞 SUN CO.</div>
        <p>© 2023 dot.cards test task. Tous droits réservés.</p>
        <div className="social-icons">
          <span>📷</span>
          <span>🐦</span>
          <span>▶️</span>
        </div>
      </footer>

      {/* Snackbar de succès */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Produit ajouté au panier !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Product;
