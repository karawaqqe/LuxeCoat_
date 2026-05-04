import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import CookieBanner from "./components/cookies/CookieBanner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ContactPage = lazy(() => import("./pages/Contact"));
const GallPage = lazy(() => import("./pages/Gall"));
const ReviewPage = lazy(() => import("./pages/Review"));
const UslugiPage = lazy(() => import("./pages/Uslugi"));
const PpfPage = lazy(() => import("./pages/Ppf"));
const CorektaPage = lazy(() => import("./pages/Corekta"));
const CeramikaPage = lazy(() => import("./pages/Ceramika"));
const DetailingPage = lazy(() => import("./pages/Detailing"));
const PolitykaPrywatnosciPage = lazy(() =>
  import("./pages/PolitykaPrywatnosci")
);

function App() {
  return (
    <HashRouter>
      <Header />

      <ScrollToTop />

      <Suspense fallback={null}>
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
          <Route
            path="/polityka-prywatnosci"
            element={<PolitykaPrywatnosciPage />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <CookieBanner />
      <Footer />
    </HashRouter>
  );
}

export default App;
