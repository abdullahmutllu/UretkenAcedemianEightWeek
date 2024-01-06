import React, { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Product({ image, name, price, id }) {
  const [productDetail, setProductDetail] = useState([]);
  const getId = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  };
  return (
    <Link onClick={<ProductDetail data={productDetail} />}>
      <div key={name} className="card">
        <div className="imgBox">
          <img src={image} alt={name} />
        </div>

        <div className="contentBox">
          <h3>{name}</h3>
          <h2 className="price">
            {price}
            61.<small>98</small> €
          </h2>
          <a href="#" className="buy">
            Buy Now
          </a>
        </div>
      </div>
    </Link>
  );
}

export default Product;
