import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SITE_CONFIG } from './config/settings';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content={SITE_CONFIG.keywords} />
        <meta property="og:title" content={SITE_CONFIG.title} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_CONFIG.title} />
        <meta name="twitter:description" content={SITE_CONFIG.description} />
        <link rel="canonical" href="https://eginkayainsaat.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
