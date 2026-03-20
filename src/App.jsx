import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}

export default App;