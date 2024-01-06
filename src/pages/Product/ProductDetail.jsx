import React from "react";

function ProductDetail({ data }) {
  return (
    <div>
      {data.map((data, index) => {
        <div key={index} className="card">
          <div className="imgBox">
            <img src={data.image} alt={data.name} />
          </div>

          <div className="contentBox">
            <h3>{data.name}</h3>
            <h2 className="price">
              {data.price}
              61.<small>98</small> €
            </h2>
            <a href="#" className="buy">
              Buy Now
            </a>
          </div>
        </div>;
      })}
    </div>
  );
}

export default ProductDetail;
