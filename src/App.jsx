import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import GallPage from "./pages/Gall";
import ReviewPage from "./pages/Review";

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
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;