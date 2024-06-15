import './App.css';
import Navbar from './component/Navbar';
import Footer from "./component/Footer";
import Home from "./component/Home";
import Contact from "./component/Contact";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './component/Blog';

import AboutUs from './component/AboutUs';
import Faq from './component/Faq';
import Services from './component/Services';
import SpecialOffers from './component/SpecialOffers';

import Choose from './component/Choose';
import Featured from './component/Featured';
 function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/service" element={<Services />} />
          
          <Route path="/off" element={<SpecialOffers />} />
          <Route path="/fet" element={<Featured />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
