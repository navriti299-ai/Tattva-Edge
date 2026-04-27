import { ArrowRight, CheckCircle, Smartphone, Users, Briefcase, FileText, ShoppingBag, Calendar, Share2, Award, Zap, Shield, Star, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const features = [
  {
    name: 'Gig Marketplace',
    description: 'Find student-friendly tasks from PPT making to coding help. Earn while you learn.',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    name: 'Notes Hub',
    description: 'Access high-quality study materials, lab manuals, and previous year papers curated by students.',
    icon: FileText,
    color: 'bg-indigo-500',
  },
  {
    name: 'Campus Marketplace',
    description: 'Buy and sell textbooks, calculators, laptops, and hostel essentials within your campus.',
    icon: ShoppingBag,
    color: 'bg-purple-500',
  },
  {
    name: 'Events & Fests',
    description: 'Never miss a hackathon, workshop, or college fest again. Register with one click.',
    icon: Calendar,
    color: 'bg-rose-500',
  },
  {
    name: 'Community Groups',
    description: 'Find project teammates, join hobby clubs, and engage in campus-wide discussions.',
    icon: Users,
    color: 'bg-emerald-500',
  },
  {
    name: 'Referral Rewards',
    description: 'Invite your friends and unlock premium features, badges, and exclusive campus perks.',
    icon: Share2,
    color: 'bg-amber-500',
  },
];

const testimonials = [
  {
    content: "Tattva Campus helped me find a graphic design gig that paid for my entire semester's books. It's a game-changer!",
    author: "Rohan Verma",
    college: "IIT Bombay",
    avatar: "https://i.pravatar.cc/150?u=rohan"
  },
  {
    content: "The notes section is a lifesaver. I found the exact lab manual I needed just two hours before my practicals.",
    author: "Sanya Gupta",
    college: "SRM University",
    avatar: "https://i.pravatar.cc/150?u=sanya"
  },
  {
    content: "Sold my old bike within 24 hours to a junior. No hassle with shipping or strangers. Purely campus-trusted.",
    author: "Arjun Reddy",
    college: "BITS Pilani",
    avatar: "https://i.pravatar.cc/150?u=arjun"
  }
];

export default function Landing() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">Tattva Campus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/auth" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">How it works</Link>
              <Link to="/auth" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Categories</Link>
              <Link to="/auth" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="text-sm font-semibold text-slate-900 px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors">Login</Link>
              <Link to="/auth" className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-0.5">Join Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse mr-2"></span>
                <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">The Exclusive Student Network</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Students Helping Students <span className="text-indigo-600">Earn, Learn & Grow.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                India's first all-in-one platform for college students. Join your campus community to unlock gigs, notes, marketplace and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth" className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all group hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
                  <PlayCircle className="mr-2 h-5 w-5 text-indigo-600" />
                  Watch Demo
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      className="h-12 w-12 rounded-full border-4 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                      alt="User avatar"
                    />
                  ))}
                  <div className="h-12 w-12 rounded-full bg-indigo-600 border-4 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">10k+</div>
                </div>
                <div className="text-sm">
                  <div className="font-bold text-slate-900">Join 10,000+ students</div>
                  <div className="text-slate-500">from 50+ colleges across India</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-indigo-100/50 rounded-3xl blur-3xl -z-10"></div>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-4 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/students/1200/900" 
                  alt="Students collaborating" 
                  className="rounded-2xl w-full object-cover shadow-inner h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100 animate-bounce transition-all duration-3000">
                  <div className="bg-green-100 p-2 rounded-lg"><Zap className="h-6 w-6 text-green-600" /></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">New Gig Posted</div>
                    <div className="text-[10px] text-slate-500">₹500 • Assignment Help</div>
                  </div>
                </div>
                <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100 translate-y-12 animate-pulse">
                  <div className="bg-indigo-100 p-2 rounded-lg"><FileText className="h-6 w-6 text-indigo-600" /></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Notes Published</div>
                    <div className="text-[10px] text-slate-500">Data Analytics • Semester 5</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4">What we offer</h2>
            <p className="text-4xl font-bold text-slate-900 mb-6">Designed by students, for students.</p>
            <p className="text-lg text-slate-600 font-medium">Everything you need to thrive in college, all in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg", feature.color)}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{feature.name}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center border-r border-slate-100 last:border-0">
              <div className="text-4xl font-black text-indigo-600 mb-2">50+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Colleges</div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <div className="text-4xl font-black text-indigo-600 mb-2">10k+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Students</div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <div className="text-4xl font-black text-indigo-600 mb-2">₹5L+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Earned</div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <div className="text-4xl font-black text-indigo-600 mb-2">20k+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 scale-x-110 -skew-x-12 transform origin-right opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-indigo-300 tracking-widest uppercase mb-4">Simplicity is key</h2>
              <p className="text-4xl font-bold mb-12">How it works</p>
              <div className="space-y-10">
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Join Your Campus</h4>
                    <p className="text-indigo-200">Sign up using your college email and verify your identity in seconds.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Explore & Engage</h4>
                    <p className="text-indigo-200">Browse gigs, notes, and local listings specialized for your campus needs.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Earn & Grow</h4>
                    <p className="text-indigo-200">Complete tasks, sell items, and build your profile to unlock premium perks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px]">
                <img 
                  src="https://picsum.photos/seed/mobile/600/1000" 
                  alt="App Preview" 
                  className="rounded-[32px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Student Stories</h2>
            <p className="text-slate-600 font-medium">Real-life impact on campuses across India.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
                <Star className="absolute top-8 right-8 h-6 w-6 text-amber-500 fill-amber-500" />
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed font-medium">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.author} className="h-12 w-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-slate-900">{t.author}</div>
                    <div className="text-xs text-indigo-600 font-bold">{t.college}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 relative z-10">Ready to boost your<br />campus life?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/auth" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center">
                Join Tattva Campus Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
            <p className="mt-8 text-indigo-100 font-medium relative z-10 font-bold">No credit card required. Only student ID needed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-xl font-bold">Tattva Campus</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6 font-medium">
                The ultimate platform for college students to earn, learn, and grow together within their campus communities.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Smartphone className="h-5 w-5" /></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Users className="h-5 w-5" /></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Shield className="h-5 w-5" /></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-indigo-400 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><Link to="/auth" className="hover:text-white transition-colors">Gig Marketplace</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Study Notes</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Buy & Sell</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Campus Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-indigo-400 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><Link to="/auth" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Safety Center</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/auth" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center text-slate-500 text-sm font-medium">
            <p>© 2026 Tattva Campus. Made with ❤️ for Indian Students.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span>English (IN)</span>
              <span>Supported locally at 50+ campuses</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
