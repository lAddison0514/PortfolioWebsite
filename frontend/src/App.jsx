import './App.css'

import Navbar from "./components/Navbar/Navbar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/Home.jsx"
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App
