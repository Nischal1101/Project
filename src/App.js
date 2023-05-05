import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Apply from "./components/Apply";
import Book from "./components/Book";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/book" element={<Book />} exact />
        <Route path="/apply" element={<Apply />} exact />
      </Routes>
    </>
  );
};

export default App;
