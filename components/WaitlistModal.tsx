import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Mail, Bell, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import { supabase } from '../supabaseClient';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setErrorMsg(null);

    try {
      // If supabase is the mock client from supabaseClient.ts, it will return the config error
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        // Handle specific Supabase error codes
        if (error.code === '23505') {
          setErrorMsg('This email is already on the waitlist!');
        } else if (error.code === 'MISSING_CONFIG') {
          setErrorMsg('Developer Note: Supabase environment variables are missing.');
        } else {
          setErrorMsg(error.message || 'Something went wrong. Please try again.');
        }
      } else {
        setSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the database.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-void border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-btc to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-btc/10 rounded-full blur-3xl pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-btc/10 rounded-full flex items-center justify-center mb-6 text-btc">
                  <Bell size={32} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Launch Imminent
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  BTCChain is currently in <b>private beta</b> while we finalize security audits. Join the waitlist to get early access.
                </p>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-btc transition-colors" size={18} />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white/5 border ${errorMsg ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-btc/50 focus:bg-white/10 transition-all placeholder:text-gray-600`}
                      required
                    />
                  </div>
                  
                  {errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-xs bg-red-400/10 p-2 rounded border border-red-400/20"
                    >
                      <AlertCircle size={14} />
                      {errorMsg}
                    </motion.div>
                  )}

                  <Button variant="primary" className="w-full" disabled={loading}>
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </form>
                
                <p className="mt-4 text-xs text-gray-600">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center py-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-400 mb-8">
                  We'll notify you as soon as spots open up. <br/> Keep an eye on your inbox.
                </p>
                <Button variant="secondary" onClick={onClose} className="w-full">
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;