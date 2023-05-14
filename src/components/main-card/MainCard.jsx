import React from "react";
import c from "./MainCard.module.css";
import { Link } from "react-router-dom";
const MainCard = ({ image, title, linkText, linkURL }) => {
  return (
    <div className={c.card}>
      <h2>{title}</h2>
      <img className={c.cardImage} src={image} alt="" />
      <Link to={linkURL}>{linkText}</Link>
    </div>
  );
};

export default MainCard;
