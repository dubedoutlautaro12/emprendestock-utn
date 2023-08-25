import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Servicios from "./pages/Servicios"
import Articulos from "./pages/Articulos"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Articulos" element={<Articulos />} />

        </Routes>
      </BrowserRouter>


      <Footer />
    </div>

  );
}

export default App;
