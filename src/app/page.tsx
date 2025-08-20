import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skill';
import GitHubContribution from './components/githubCalendar';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-30">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <br></br>
        <br></br>
        <Skills/>
        <br></br>
        <GitHubContribution/>
        <br></br>
        <Projects />
        <Contact />
        <br></br>
        <Footer />
      </div>
    </main>
  );
}
