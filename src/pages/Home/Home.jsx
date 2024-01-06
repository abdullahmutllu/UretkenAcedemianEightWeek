import React, { useEffect, useState } from "react";
import "./home.css";
import Product from "../Product/Product";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <div className="divContainer">
      <ul className="divUlCon">
        {products.map((product) => (
          <li key={product.id}>
            <div className="productDesign">
              <Product image={product.image} name={product.title} price={product.price} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
