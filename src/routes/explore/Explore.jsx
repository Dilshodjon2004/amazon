import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  console.log(productData);

  return (
    <div>
      {productData.map(({ image, title, id }) => (
        <article key={id}>
          <h1>{title}</h1>
          <img src={image} alt="" />
          <Link to={`/explorenow/${id}`}>Learn more</Link>
        </article>
      ))}
    </div>
  );
};

export default Explore;
