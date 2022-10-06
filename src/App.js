import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Coinspage from "./pages/Coins/Coinspage";
import Exchanges from "./pages/ExchangesPage/ExchangesPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<Coinspage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins/:uuid" element={<Coin />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
