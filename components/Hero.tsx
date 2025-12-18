import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, TrendingDown } from 'lucide-react';
import Button from './ui/Button';
import { useWaitlist } from '../context/WaitlistContext';

const Hero: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  const [btcData, setBtcData] = useState<{ price: number; change: number } | null>(null);

  useEffect(() => {
    const fetchBtcData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        if (data.bitcoin) {
          setBtcData({
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change
          });
        }
      } catch (error) {
        console.error('Error fetching BTC data:', error);
      }
    };

    fetchBtcData();
    // Update price every 60 seconds
    const interval = setInterval(fetchBtcData, 60000);
    return () => clearInterval(interval);
  }, []);

  const btcPriceDisplay = btcData 
    ? `$${btcData.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    : "$65,432";

  const btcChangeDisplay = btcData 
    ? `${btcData.change > 0 ? '+' : ''}${btcData.change.toFixed(2)}%`
    : "+2.45%";

  const isPositive = !btcData || btcData.change >= 0;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-btc/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btc/10 border border-btc/20 text-btc text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F7931A] animate-pulse"></span>
              BTCFi Season is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              Unleash the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Capital Efficiency</span> <br />
              of your <span className="text-[#F7931A]">Bitcoin.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The ultimate cross-chain yield aggregator. Bridge, Stake, and Earn on your BTC assets across Merlin, B², and Ethereum in one click.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="primary" className="w-full sm:w-auto" onClick={openWaitlist}>
              Launch App <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" onClick={openWaitlist}>
              <ShieldCheck size={18} /> View Audits
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-xl font-bold font-display">$500M+</span>
              <span>Total Value Locked</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-white text-xl font-bold font-display">50,000+</span>
              <span>Active Users</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Content - Abstract Crypto Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center h-[600px]"
        >
          {/* Central Glowing Orb */}
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-btc/20 to-orange-500/10 blur-xl animate-pulse" />
          
          {/* Rotating Rings */}
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow border-dashed" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
          <div className="absolute w-[300px] h-[300px] border border-btc/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s', transform: 'rotateX(45deg)' }} />

          {/* Floating Cards Mockup */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-[340px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center text-black font-bold">₿</div>
                <div>
                  <h3 className="font-bold text-white">Bitcoin</h3>
                  <p className="text-xs text-gray-400">Native BTC</p>
                </div>
              </div>
              <div className="text-right pr-2">
                <p className="font-bold text-white text-2xl tracking-tight mb-1">{btcPriceDisplay}</p>
                <p className={`text-xs flex items-center justify-end gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {btcChangeDisplay}
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-2">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#F7931A] rounded-full shadow-[0_0_8px_rgba(247,147,26,0.5)]" />
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                <span>Bridging to Merlin...</span>
                <span className="text-white">75%</span>
              </div>
            </div>

            {/* Reduced Yield Badge - Moved further right */}
            <div className="absolute -right-12 -top-14 bg-void/95 border border-btc/20 px-3 py-2 rounded-lg shadow-xl backdrop-blur-md">
                <div className="text-[9px] text-gray-500 uppercase tracking-tighter font-bold mb-0.5">Yield APY</div>
                <div className="text-base font-bold text-[#F7931A] flex items-center gap-1">
                    18.4% <TrendingUp size={14} />
                </div>
            </div>

            {/* Price Ticker Helper */}
            {btcData && (
              <div className="absolute -left-8 -bottom-8 bg-void/60 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-gray-500 backdrop-blur-md flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Live via CoinGecko
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;