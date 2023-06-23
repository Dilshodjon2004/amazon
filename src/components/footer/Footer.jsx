import React from "react";
import footerElements from "../../data/dummy-footer.json";
import { Container } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import c from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={c.footer}>
      <Container>
        <div className={c.footerItemsWrapper}>
          {footerElements.map((item) => (
            <div className={c.footerItem}>
              <p key={uuidv4} className={c.footerItemTitle}>
                {item.listTitle}
              </p>
              {item.titles.map((el) => (
                <p key={uuidv4()} className={c.footerLink}>
                  {el}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
