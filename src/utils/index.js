import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

const BackToTop = () => {
  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (pathname.includes("login") || pathname.includes("signup")) {
    return;
  }
  return (
    <div onClick={scrollToTop} className="back-to-top">
      <span>Back to top</span>
    </div>
  );
};

const Overlay = ({ setIsSidebarOpen }) => {
  return (
    <div onClick={() => setIsSidebarOpen(false)} className="overlay"></div>
  );
};

export { Container, BackToTop, Overlay };
