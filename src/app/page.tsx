import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skill';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-30">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <br></br>
        <br></br>
        <Skills/>
      </div>
    </main>
  );
}
