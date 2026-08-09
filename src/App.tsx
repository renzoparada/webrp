import { useLenis } from "./hooks/useLenis";
import { Preloader } from "./components/Preloader";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { StageBand } from "./components/StageBand";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Methodology } from "./components/Methodology";
import { Results } from "./components/Results";
import { Testimonials } from "./components/Testimonials";
import { Resources } from "./components/Resources";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useLenis();

  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <StageBand />
        <Gallery />
        <Services />
        <Methodology />
        <Results />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
