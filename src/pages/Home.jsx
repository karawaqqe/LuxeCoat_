import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";
import Reviews from "../components/reviews/Reviews";
import Social from "../components/social/Social";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Reviews />
      <Gallery />
      <Social />
    </>
  );
}