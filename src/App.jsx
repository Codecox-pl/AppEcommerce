import Navbar from "./components/layout/navbar/Navbar";
import HeroCarousel from "./components/layout/hero/HeroCarousel";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <HeroCarousel />
    </div>
  );
}

export default App;