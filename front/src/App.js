import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Servicios from "./pages/Servicios"
import Unirme from "./pages/Unirme"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="Search" element={<Search />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Unirme" element={<Unirme />} />

        </Routes>
      </BrowserRouter>


      <Footer />
    </div>

  );
}

export default App;
