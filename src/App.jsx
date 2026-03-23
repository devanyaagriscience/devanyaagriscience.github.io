import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Media from './pages/Media';
import RedirectHandler from './components/RedirectHandler';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          {/* Short-link / QR redirect — slugs defined in src/data/urlMappings.js */}
          <Route path="/r/:slug" element={<RedirectHandler />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
