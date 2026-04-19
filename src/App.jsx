import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import GallPage from "./pages/Gall";
import ReviewPage from "./pages/Review";
import UslugiPage from "./pages/Uslugi";
import PpfPage from "./pages/Ppf";
import CorektaPage from "./pages/Corekta";
import CeramikaPage from "./pages/Ceramika";
import DetailingPage from "./pages/Detailing";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <HashRouter>
      <Header />
      
      <ScrollToTop /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GallPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/uslugi" element={<UslugiPage />} />
        <Route path="/uslugi/ppf" element={<PpfPage />} />
        <Route path="/uslugi/corekta-lakieru" element={<CorektaPage />} />
        <Route path="/uslugi/ceramika" element={<CeramikaPage />} />
        <Route path="/uslugi/detailing" element={<DetailingPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
