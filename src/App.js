import "./App.css";
import Header from "./components/header/Header";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Routes from "./routes/Routes";
import { BackToTop } from "./utils";
function App() {
  return (
    <div>
      <Header />
      <MiniHeader/>
      <Routes />
      <BackToTop/>
    </div>
  );
}

export default App;
