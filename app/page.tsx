import About from '@/components/Custom/About';
import Hero from '@/components/Custom/Hero';
import Work from '@/components/Custom/Work';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
}

const Home = () => {
  return (
    <div className="flex flex-col bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y overflow-y-scroll scroll-smooth gap-28 overflow-x-hidden z-20">
      <section id="hero" className="snap-start h-screen w-screen">
        <Hero title="Software Engineer, UE Developer" />
      </section>

      <section id="about" className="snap-center w-screen h-screen">
        <About />
      </section>

      <section id="experience" className="snap-center w-screen h-screen">
        <Work />
      </section>
    </div>
  );
}

export default Home;