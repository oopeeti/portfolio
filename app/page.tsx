import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      
      {/* Experience */}

      {/* Skills */}

      {/* Contact Me */}
    
    </div>
  );
}

export default HomePage;
