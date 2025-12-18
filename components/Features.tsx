import React from 'react';
import { Network, RefreshCw, Key, ArrowUpRight, Zap, Layers } from 'lucide-react';
import Card from './ui/Card';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The infrastructure for <br />
            <span className="text-btc">Bitcoin DeFi</span>
          </h2>
          <p className="text-gray-400 text-lg">
            BTCChain abstracts away the complexity of bridging and staking, giving you access to the best yields across the Bitcoin L2 ecosystem.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1: Large Span */}
          <Card className="md:col-span-2 md:row-span-2 !p-10 flex flex-col justify-between group overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-btc/20 rounded-lg flex items-center justify-center text-btc mb-6">
                <Network size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Omnichain Bridge Aggregator</h3>
              <p className="text-gray-400 max-w-md">
                Instantly transfer BTC between Native Bitcoin, Merlin, B², Ethereum, and Solana. We find the cheapest and fastest route for your liquidity.
              </p>
            </div>
            
            <div className="relative mt-8 h-40 bg-white/5 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center gap-8 group-hover:scale-[1.02] transition-transform duration-500">
                {/* Abstract visualization of chains connecting */}
                <div className="w-20 h-20 rounded-full bg-btc/10 border border-btc/30 flex items-center justify-center font-bold text-btc">BTC</div>
                <ArrowUpRight className="text-gray-600" />
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs text-blue-400">ETH</div>
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xs text-purple-400">Merlin</div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-btc/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-btc/10 transition-colors" />
          </Card>

          {/* Feature 2: Auto-Compounding */}
          <Card delay={0.1} className="flex flex-col justify-center group">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-display">Auto-Compounding</h3>
            <p className="text-gray-400 text-sm">
              Smart vaults automatically harvest and reinvest your yields, maximizing APY through compound interest.
            </p>
          </Card>

          {/* Feature 3: Non-Custodial */}
          <Card delay={0.2} className="flex flex-col justify-center group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <Key size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-display">Non-Custodial</h3>
            <p className="text-gray-400 text-sm">
              You maintain full ownership of your keys. We simply optimize the routing and strategy execution.
            </p>
          </Card>

          {/* Feature 4: One-Click Strategy */}
          <Card delay={0.3} className="md:col-span-1 flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-display">One-Click Zaps</h3>
            <p className="text-gray-400 text-sm">
              Deposit native BTC directly into complex DeFi strategies on L2s without manual bridging steps.
            </p>
          </Card>

          {/* Feature 5: Layer 2 Optimization */}
          <Card delay={0.4} className="md:col-span-2 flex flex-row items-center gap-8 overflow-hidden">
             <div className="flex-1">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">Gas Optimization</h3>
                <p className="text-gray-400 text-sm">
                    Our batching engine reduces gas fees by up to 40% when interacting with Ethereum-based L2s.
                </p>
             </div>
             <div className="hidden sm:block w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-xl" />
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Features;