import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const yields = [
  { asset: 'stBTC', apy: '12.5%', chain: 'Merlin' },
  { asset: 'm-BTC', apy: '18.2%', chain: 'Manta' },
  { asset: 'LBTC', apy: '8.4%', chain: 'Lombard' },
  { asset: 'uniBTC', apy: '15.9%', chain: 'Fractal' },
  { asset: 'SolvBTC', apy: '11.2%', chain: 'B² Network' },
  { asset: 'WBTC', apy: '4.5%', chain: 'Ethereum' },
  { asset: 'tBTC', apy: '5.8%', chain: 'Arbitrum' },
];

const YieldTicker: React.FC = () => {
  return (
    <div id="yields" className="w-full bg-btc/5 border-y border-btc/10 overflow-hidden py-3 relative z-10 backdrop-blur-sm">
      <div className="flex w-max">
        <motion.div
          className="flex gap-12 px-12"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...yields, ...yields, ...yields].map((item, index) => (
            <div key={index} className="flex items-center gap-3 whitespace-nowrap">
              <span className="font-display font-bold text-white">{item.asset}</span>
              <span className="text-btc font-mono font-medium flex items-center gap-1">
                {item.apy} <TrendingUp size={14} />
              </span>
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded uppercase">{item.chain}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-void to-transparent z-10" />
    </div>
  );
};

export default YieldTicker;