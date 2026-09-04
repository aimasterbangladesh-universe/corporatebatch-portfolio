import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-bgLight text-inkBlack">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />

      {/* Next sections (About, Experience, Contact) go here */}
    </div>
  );
}

export default App;
