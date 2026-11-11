import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat/WhatsAppFloat';
import ScrollToTop from '@/components/common/ScrollToTop';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Menu from '@/pages/Menu/Menu';
import Gallery from '@/pages/Gallery/Gallery';
import Contact from '@/pages/Contact/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
