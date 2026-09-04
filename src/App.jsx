import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-bgLight text-inkBlack">
      <Navbar />
      <Hero />

      {/* Next sections (Services, About, Experience, Contact) go here */}
    </div>
  );
}

export default App;
