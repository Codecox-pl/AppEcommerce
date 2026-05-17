import Navbar from "./components/layout/navbar/Navbar";
import Hero from "./components/layout/hero/Hero";
import FeaturedCategory from "./components/layout/products/FeaturedCategory";
import Newsletter from "./components/layout/newsletter/Newsletter";
import Footer from "./components/layout/footer/Footer";
import WhatsAppButton from "./components/widgets/WhatsAppButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeaturedCategory />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;