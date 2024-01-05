import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
