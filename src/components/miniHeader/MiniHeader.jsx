import React from "react";
import c from "./MiniHeader.module.css";
import { BiMenu } from "react-icons/bi";
import miniHeaderLinks from "../../data/dummy-miniHeader.json";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const MiniHeader = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { pathname } = useLocation();
  if (pathname.includes("login") || pathname.includes("signup")) {
    return;
  }
  return (
    <div className={c.miniHeaderWrapper}>
      <div className={c.miniHeader}>
        <button
          className={c.menu}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BiMenu />
          All
        </button>
        {miniHeaderLinks.map((item) => (
          <Link className={c.miniHeaderLinks} to={item.linkUrl} key={uuidv4()}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={c.leftLinks}>
        <Link className={`${c.miniHeaderLinks}`} to="#" key={uuidv4()}>
          Shop great deals now
        </Link>
      </div>
    </div>
  );
};

export default MiniHeader;
