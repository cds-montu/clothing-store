// import React from "react";
// import { PRODUCTS } from "../data/products";

// const TShirts = () => {
//   const { items, loading } = useSelector((state) => state.products);

//   const tshirts = items.filter((product) => product.category === "T-Shirts");

//   return (
//     <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
//       <h2 style={{ marginBottom: "20px" }}>T-Shirts</h2>
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//         gap: "20px",
//       }}>
//         {tshirts.map((product) => (
//           <div key={product.id} style={{
//             border: "1px solid #ddd", borderRadius: "10px", padding: "10px",
//             textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//           }}>
//             <img src={product.image} alt={product.name} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
//             <h3>{product.name}</h3>
//             <p>₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TShirts;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";

export default function TShirts() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const TShirts = items.filter(
    (p) => p.category.toLowerCase() === "T-Shirts"
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return <ProductList products={TShirts} />;
}