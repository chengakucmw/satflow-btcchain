import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

const Footer: React.FC = () => {
  const { openWaitlist } = useWaitlist();

  const handleLink = (e: React.MouseEvent) => {
    e.preventDefault();
    openWaitlist();
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
             <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#F7931A] flex items-center justify-center text-black font-bold text-xs">₿</div>
                <span className="text-xl font-display font-bold tracking-tight">
                    <span className="text-[#F7931A]">BTC</span>Chain
                </span>
            </a>
            <p className="text-gray-500 text-sm">
                Unlocking the trillion-dollar potential of Bitcoin through decentralized finance.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Yields</button></li>
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Bridge</button></li>
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Dashboard</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Documentation</button></li>
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Audits</button></li>
                <li><button onClick={handleLink} className="hover:text-[#F7931A] transition-colors text-left">Whitepaper</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <div className="flex gap-4">
                <button onClick={handleLink} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#F7931A] hover:text-black transition-all">
                    <Twitter size={18} />
                </button>
                <button onClick={handleLink} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#F7931A] hover:text-black transition-all">
                    <Disc size={18} />
                </button>
                <button onClick={handleLink} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#F7931A] hover:text-black transition-all">
                    <Github size={18} />
                </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2024 BTCChain Finance. All rights reserved.</p>
            <div className="flex gap-6">
                <button onClick={handleLink} className="hover:text-gray-400">Privacy Policy</button>
                <button onClick={handleLink} className="hover:text-gray-400">Terms of Service</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;