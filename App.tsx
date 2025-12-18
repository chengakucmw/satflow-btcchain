import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import YieldTicker from './components/YieldTicker';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import Footer from './components/Footer';
import { WaitlistProvider } from './context/WaitlistContext';

function App() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-void text-white font-sans selection:bg-btc selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <YieldTicker />
          <Features />
          <HowItWorks />
          <Security />
        </main>
        <Footer />
      </div>
    </WaitlistProvider>
  );
}

export default App;