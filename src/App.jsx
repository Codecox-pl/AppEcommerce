import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import WhatsAppButton from "./components/widgets/WhatsAppButton";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-bg">
        <Navbar onSearchModalChange={setIsSearchOpen} />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        {!isSearchOpen && <WhatsAppButton />}
      </div>
    </BrowserRouter>
  );
}

export default App;