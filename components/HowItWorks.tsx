import React from 'react';
import { Wallet, ArrowDownCircle, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your UniSat, Xverse, or MetaMask wallet to get started."
  },
  {
    icon: ArrowDownCircle,
    title: "Deposit BTC",
    description: "Deposit Native BTC or wrapped assets. We handle the bridging."
  },
  {
    icon: Coins,
    title: "Earn Yield",
    description: "Watch your balance grow with real yield from L2 protocols."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Start Earning in Minutes</h2>
          <p className="text-gray-400">No complex tutorials needed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-btc/30 to-transparent border-t border-dashed border-white/20 z-0" />

            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center group"
                >
                    <div className="w-24 h-24 rounded-full bg-void border border-white/10 flex items-center justify-center mb-6 group-hover:border-btc/50 group-hover:shadow-[0_0_20px_rgba(247,147,26,0.2)] transition-all duration-300">
                        <step.icon size={32} className="text-gray-400 group-hover:text-btc transition-colors" />
                    </div>
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-void border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">
                        {index + 1}
                    </div>
                    <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;