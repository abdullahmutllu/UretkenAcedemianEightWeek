import React, { useState, useEffect } from "react";
import "./productLayout.css";
import Product from "../Product/Product";

function ProductLayout() {
  const [categories, setCategories] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const getProduct = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  };

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  };

  useEffect(() => {
    fetchCategories();
    getProduct();
  }, []);

  return (
    <div className="layoutContainer">
      <div className="layoutDiv">
        <ul className="layoutUl">
          {categories.map((category, index) => (
            <li key={index} onClick={() => getProduct(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="test">
        {categoryProduct.map((data, index) => (
          <Product key={index} image={data.image} name={data.title} price={data.price} id={data.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductLayout;
