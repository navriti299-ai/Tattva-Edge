import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User, 
  Smartphone, 
  School, 
  Calendar, 
  ArrowRight, 
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleAuth = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setUser({
        id: 'user-1',
        name: 'Aryan Sharma',
        email: 'aryan@example.edu',
        college: 'IIT Delhi',
        year: '3rd Year',
        department: 'Computer Science',
        role: 'student',
        premium: false,
        referralCode: 'ARYAN123',
        stats: {
          gigsCompleted: 12,
          rating: 4.8,
          points: 450,
        }
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      {/* Left: Branding & Info */}
      <section className="hidden lg:flex flex-col justify-between p-16 bg-primary-theme text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-accent-theme/10 -skew-x-12 translate-x-1/2" />
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 mb-20">
            <div className="w-6 h-6 bg-accent-vibrant rounded-md"></div>
            <span className="text-xl font-extrabold tracking-tight">TATTVA CAMPUS</span>
          </Link>
          <div className="max-w-md">
            <h1 className="text-5xl font-extrabold mb-8 leading-tight tracking-tighter">Your Campus, <br />In Your Pocket. 🎒</h1>
            <ul className="space-y-6">
              {[
                { icon: Zap, text: 'Earn money completing campus tasks' },
                { icon: ShieldCheck, text: 'Secure marketplace for student items' },
                { icon: CheckCircle2, text: 'Get verified student notes & materials' },
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <item.icon className="h-5 w-5 text-accent-theme" />
                  </div>
                  <span className="text-lg font-bold text-white/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative z-10 text-[11px] font-bold text-white/40 uppercase tracking-widest">
          © 2026 Tattva Campus. Join 10k+ students nationwide.
        </div>
      </section>

      {/* Right: Auth Form */}
      <section className="flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 lg:hidden">
          <Link to="/" className="text-xl font-extrabold text-primary-theme">TC</Link>
        </div>

        <motion.div 
          layout
          className="w-full max-w-md bg-white p-10 rounded-card border border-border-theme shadow-card relative z-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-text-main tracking-tight">{isLogin ? 'Welcome back!' : 'Join the camp.'}</h2>
            <p className="text-text-muted font-medium mt-2">{isLogin ? 'Log in to your student hub.' : 'Create your student account.'}</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <AnimatePresence mode="wait">
              {isLogin ? (
                /* Login Form */
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-accent-theme transition-colors" />
                      <input 
                        type="email" 
                        required
                        placeholder="yourname@college.edu"
                        className="w-full pl-11 pr-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-accent-theme transition-colors" />
                      <input 
                        type="password" 
                        required
                        placeholder="••••••••"
                        className="w-full pl-11 pr-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" 
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-accent-theme hover:underline">Forgot password?</button>
                  </div>
                </motion.div>
              ) : (
                /* Signup Stepper */
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  {step === 1 ? (
                    <div className="space-y-5 animate-in slide-in-from-right duration-300">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-accent-theme transition-colors" />
                          <input type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Phone Number</label>
                        <div className="relative group">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-accent-theme transition-colors" />
                          <input type="tel" placeholder="+91 98765 43210" className="w-full pl-11 pr-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" />
                        </div>
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="w-full py-3 bg-primary-theme text-white rounded-button text-[11px] font-bold uppercase tracking-widest hover:opacity-90 flex items-center justify-center transition-all">
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5 animate-in slide-in-from-right duration-300">
                      <button type="button" onClick={() => setStep(1)} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-text-main mb-2">
                        <ChevronLeft className="h-3 w-3 mr-1" /> Back
                      </button>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">College Name</label>
                        <div className="relative group">
                          <School className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-accent-theme transition-colors" />
                          <input type="text" placeholder="IIT Delhi" className="w-full pl-11 pr-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Year</label>
                          <select className="w-full px-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm">
                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Dept</label>
                          <input type="text" placeholder="CS" className="w-full px-4 py-3 bg-bg-light border border-border-theme rounded-button focus:outline-none focus:ring-1 focus:ring-accent-theme focus:bg-white transition-all font-semibold text-text-main text-sm" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {(!isLogin && step === 1) ? null : (
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-3.5 bg-accent-theme text-white rounded-button text-[11px] font-bold uppercase tracking-widest shadow-lg hover:opacity-90 transition-all flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  isLogin ? 'Login Now' : 'Complete Signup'
                )}
              </button>
            )}
          </form>

          <div className="mt-10 pt-8 border-t border-border-theme text-center">
            <p className="text-xs font-bold text-text-muted">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setStep(1);
                }}
                className="ml-1 text-accent-theme hover:underline"
              >
                {isLogin ? 'Join Tattva' : 'Login instead'}
              </button>
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-100 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-100 rounded-full blur-[100px] -z-10" />
      </section>
    </div>
  );
}
