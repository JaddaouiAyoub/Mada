import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Values from './components/Values';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-accent/30">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Values />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
