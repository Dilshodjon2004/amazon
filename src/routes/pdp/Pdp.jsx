import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Pdp = () => {
  const smth = useParams();
  const [singleProductData, setSingleProductData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${smth.id}`)
      .then((response) => response.json())
      .then((data) => setSingleProductData(data));
  }, []);
  console.log(singleProductData);
  return (
    <div>
      <h1>Hello this is Pdp</h1>
      <div>
        <img src={singleProductData?.image} alt="" />
      </div>
    </div>
  );
};

export default Pdp;
