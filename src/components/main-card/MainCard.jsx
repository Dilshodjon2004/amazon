import React from "react";
import c from "./MainCard.module.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const MainCard = ({ image, title, linkText, linkURL, itemIndex }) => {
  return (
    <div className={c.card} key={itemIndex}>
      <h2>{title}</h2>
      <img className={c.cardImage} src={image} alt="" />
      <Link key={uuidv4()} to={linkURL}>
        {linkText}
      </Link>
    </div>
  );
};

export default MainCard;
