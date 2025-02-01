import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarProvider } from './context/NavbarContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './ui/Header';
import Hero from './ui/Hero';
import About from './ui/About';
import Advantages from './ui/Advantages';
import Prices from './ui/Prices';
import Purchase from './ui/Purchase';
import Socials from './ui/Socials';
import Portfolio from './ui/Portfolio';
import Reviews from './ui/Reviews';
import Footer from './ui/Footer';

import PricesPage from './ui/PricesPage'; 
import Blog from './ui/Blog'; // Сторінка блогу
import BlogPost1 from './ui/BlogPost1'; // Нова сторінка блогу
import BlogPost2 from './ui/BlogPost2';
import BlogPost3 from './ui/BlogPost3';
import BlogPost4 from './ui/BlogPost4';
import BlogPost5 from './ui/BlogPost5';
import BlogPost6 from './ui/BlogPost6';
import BlogPost7 from './ui/BlogPost7'; // Новий пост
import BlogPost8 from './ui/BlogPost8'; // Новий пост
import BlogPost9 from './ui/BlogPost9'; // Новий пост
import BlogPost10 from './ui/BlogPost10'; // Новий пост
import BlogPost11 from './ui/BlogPost11'; // Новий пост
import BlogPost12 from './ui/BlogPost12'; // Новий пост

function App() {
  return (
    <NavbarProvider>
      <ToastContainer />
      <div className='min-h-[150vh]'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Advantages />
                <Prices />
                <Purchase />
                <Socials />
                <Portfolio />
                <Reviews />
              </>
            } />

            <Route path="/prices" element={<PricesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/your-first-telegram-bot" element={<BlogPost1 />} />
            <Route path="/blog/integrations" element={<BlogPost2 />} />
            <Route path="/blog/developing" element={<BlogPost3 />} />
            <Route path="/blog/magnetto" element={<BlogPost4 />} />
            <Route path="/blog/e-commerce" element={<BlogPost5 />} />
            <Route path="/blog/sites" element={<BlogPost6 />} />
            <Route path="/blog/increase-sales" element={<BlogPost7 />} />
            <Route path="/blog/feedback" element={<BlogPost8 />} />
            <Route path="/blog/how-to-earn-money" element={<BlogPost9 />} />
            <Route path="/blog/perspectives-in-ukraine" element={<BlogPost10 />} />
            <Route path="/blog/ai-in-bots" element={<BlogPost11 />} />
            <Route path="/blog/more-leads" element={<BlogPost12 />} />

            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NavbarProvider>
  );
}

export default App;
