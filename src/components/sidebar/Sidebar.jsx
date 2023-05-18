import { useEffect, useRef, useState } from "react";
import c from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RxCaretRight, RxCaretDown, RxCaretUp } from "react-icons/rx";
import sidebarData from "../../data/dummy-sidebar.json";
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
  const sidebarOpen = useRef();
  const [sidebarLimit, setSidebarLimit] = useState(4);

  useEffect(() => {
    if (selectedSidebarItem) {
      sidebarOpen.current.scrollLeft = sidebarOpen.current.offsetWidth;
    } else {
      sidebarOpen.current.scrollLeft = 0;
    }
  }, [selectedSidebarItem]);

  return (
    <>
      <div
        ref={sidebarOpen}
        className={
          isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`
        }
      >
        <div className={c.sidebarItemsWrapper}>
          <div className={c.sidebarSignIn}>
            <Link to="/login">
              <FaUserCircle />
              <span>Hello, Sign in</span>
            </Link>
          </div>

          {sidebarData.map((sidebarDataEl) => (
            <>
              <h2 className={c.sidebarTitle}>
                {sidebarDataEl.sidebarMenuTitle}
              </h2>
              {sidebarDataEl.sidebarMenuItems
                .slice(0, sidebarLimit)
                .map((sidebarMenuItemsEl) => (
                  <div
                    className={c.sidebarItem}
                    onClick={() => {
                      setSelectedSidebarItem(sidebarMenuItemsEl);
                    }}
                  >
                    {<p>{sidebarMenuItemsEl?.sidebarMainTitle}</p>}
                    <RxCaretRight />
                  </div>
                ))}

              <div
                style={
                  sidebarDataEl.sidebarMenuItems.length > 4
                    ? { display: "block" }
                    : { display: "none" }
                }
                className={c.sidebarItem}
                onClick={() => {
                  sidebarLimit <= 4
                    ? setSidebarLimit(sidebarDataEl.sidebarMenuItems.length)
                    : setSidebarLimit(4);
                }}
              >
                {sidebarLimit === 4 ? (
                  <p className={c.showHide}>
                    See more <RxCaretDown />
                  </p>
                ) : (
                  <p className={c.showHide}>
                    See less <RxCaretUp />
                  </p>
                )}
              </div>
              <div className={c.line}></div>
            </>
          ))}
        </div>

        <div className={c.sidebarOpen}>
          <div
            className={c.backToMain}
            onClick={() => {
              setSelectedSidebarItem(null);
            }}
          >
            <FiArrowLeft />
            <span>Main Menu</span>
          </div>
          <div className={c.line}></div>
          {selectedSidebarItem?.subitemsWrapper?.map((item) => (
            <>
              <h3 className={c.sidebarSubTitle}>{item.subitemTitle}</h3>
              {item?.subitems?.map((itemx) => (
                <p className={c.sidebarSubItem}>{itemx}</p>
              ))}
              <div className={c.line}></div>
            </>
          ))}
        </div>
      </div>
      <FiX
        style={isSidebarOpen ? { display: "block" } : { display: "none" }}
        className={c.close}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      />
    </>
  );
};

export default Sidebar;
