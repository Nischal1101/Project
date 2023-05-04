import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </>
  );
};

export default App;
