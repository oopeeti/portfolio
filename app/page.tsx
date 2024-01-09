import About from '@/components/Custom/About';
import Hero from '@/components/Custom/Hero';
import Work from '@/components/Custom/Work';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function Home() {
  return (
    <div className="flex flex-col bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y overflow-y-scroll scroll-smooth overflow-x-hidden z-20">
      <section id="hero" className="snap-start">
        <Hero title="Software Engineer, UE Developer" />
      </section>

      <section id="about" className="snap-start h-screen">
        <About />
      </section>

      <section id="experience" className="snap-center my-10 h-screen">
        <Work />
      </section>
    </div>
  );
}