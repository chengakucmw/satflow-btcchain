import React from 'react';
import { Shield, Lock, FileCode } from 'lucide-react';
import Card from './ui/Card';

const Security: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <Shield size={12} /> Bank-Grade Security
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Your assets are protected by <br/> <span className="text-white">Mathematics</span>, not promises.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We prioritize security above all else. Our smart contracts are rigorously audited and monitored 24/7.
            </p>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-btc">
                        <FileCode size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Double Audited</h4>
                        <p className="text-sm text-gray-500">Smart contracts audited by CertiK and SlowMist.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-btc">
                        <Lock size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Time-Lock & Multi-Sig</h4>
                        <p className="text-sm text-gray-500">48-hour timelock on all upgrades. 5/8 Multi-sig governance.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Visual/Cards */}
        <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2 bg-gradient-to-br from-white/5 to-transparent">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 font-mono text-xs">AUDIT_REPORT_2024.PDF</span>
                    <span className="text-green-400 text-xs px-2 py-1 bg-green-500/10 rounded">PASSED</span>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-white/10 rounded"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    <div className="h-2 w-4/5 bg-white/10 rounded"></div>
                </div>
                <div className="mt-6 flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {/* Fake Logos for Audit Firms */}
                    <div className="font-display font-bold text-xl">CERTIK</div>
                    <div className="font-display font-bold text-xl">SLOWMIST</div>
                </div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-8 text-center bg-green-900/10 border-green-500/20">
                <Shield size={32} className="text-green-500 mb-3" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400">Uptime</div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-8 text-center">
                <Lock size={32} className="text-btc mb-3" />
                <div className="text-2xl font-bold text-white">$0</div>
                <div className="text-xs text-gray-400">Lost Funds</div>
            </Card>
        </div>

      </div>
    </section>
  );
};

export default Security;