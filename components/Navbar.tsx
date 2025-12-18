import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Wallet } from 'lucide-react';
import Button from './ui/Button';
import { useWaitlist } from '../context/WaitlistContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { openWaitlist } = useWaitlist();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Yields', href: '#yields', active: false },
    { name: 'Bridge', href: '#features', active: false },
    { name: 'Dashboard', href: '#', active: false },
    { name: 'Docs', href: '#', active: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: { href: string; active: boolean }) => {
    if (!link.active) {
      e.preventDefault();
      openWaitlist();
      setMobileMenuOpen(false);
    }
    // For active anchor links, default behavior (scroll) proceeds
  };

  return (
    <motion.nav
      style={{ backgroundColor: navBackground, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
    >
      <div className={`max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ${isScrolled ? 'border-b border-white/10' : ''}`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center text-black font-bold font-display text-xl group-hover:rotate-12 transition-transform">
            ₿
          </div>
          <span className="text-2xl font-display font-bold tracking-tight">
            <span className="text-[#F7931A]">BTC</span>Chain
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-sm font-medium text-gray-400 hover:text-[#F7931A] transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="!py-2 !px-4 text-sm border-white/20 hover:border-[#F7931A] hover:text-black"
            onClick={openWaitlist}
          >
            <Wallet size={16} />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-void/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-[#F7931A] cursor-pointer"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full justify-center mt-4" onClick={() => { openWaitlist(); setMobileMenuOpen(false); }}>
              Connect Wallet
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;