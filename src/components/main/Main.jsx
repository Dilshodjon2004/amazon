import React from "react";
import c from "./Main.module.css";
import { Container } from "../../utils";
import MainCard from "../main-card/MainCard";
import allCards from "../../data/dummy-mainCards.json";
const Main = () => {
  return (
    <Container>
      <div className={c.main}>
        <div className={c.wrapper}>
          {allCards.map((cardItem) => (
            <MainCard
              itemIndex={cardItem.id}
              image={cardItem.cardImage}
              title={cardItem.title}
              linkText={cardItem.linkLabel}
              linkURL={cardItem.linkURL}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Main;
