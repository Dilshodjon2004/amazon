import "./App.css";
import Header from "./components/header/Header";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Routes from "./routes/Routes";
import { BackToTop, Overlay } from "./utils";
import Sidebar from "./components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/subFooter/SubFooter";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);
  return (
    <div>
      <Header />
      <MiniHeader
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Routes />
      <BackToTop />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      <Footer />
      <SubFooter/>
    </div>
  );
}

export default App;
