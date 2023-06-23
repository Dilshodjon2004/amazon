import React from "react";
import c from "./subFooter.module.css";
import subFooterElements from "../../data/dummy-subFooter.json";
import { Container } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const SubFooter = () => {
  console.log(subFooterElements);
  return (
    <div className={c.subFooterWrapper}>
      <Container>
        <div className={c.sub_footer}>
          {subFooterElements.map((el) => (
            <div className={c.subfooter_items} key={uuidv4()}>
              {el.map((item) => (
                <>
                  <Link to="." className={c.subfooter_item}>
                    <p className={c.subfooter__item_title}>{item.title}</p>
                    <p className={c.subfooter__item_subtitle}>
                      {item.subtitle}
                    </p>
                  </Link>
                </>
              ))}
            </div>
          ))}
        </div>
        <div className={c.rights}>
          <Link to="." className={c.subfooter__item_title}>
            Conditions of Use
          </Link>
          <Link to="." className={c.subfooter__item_title}>
            Privacy Notice
          </Link>
          <Link to="." className={c.subfooter__item_title}>
            Your Ads Privacy Choices
          </Link>
        </div>
        <p className={c.copyright}>
          &copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
          affiliates
        </p>
      </Container>
    </div>
  );
};

export default SubFooter;
