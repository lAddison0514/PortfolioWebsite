import './App.css'

import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/Home"
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

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
