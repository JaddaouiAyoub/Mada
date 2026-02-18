import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Values from './components/Values';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Values />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
