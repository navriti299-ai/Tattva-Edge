import { motion } from 'motion/react';
import { 
  User, 
  Settings, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Star, 
  Award, 
  ChevronRight,
  Book,
  Camera,
  LogOut,
  Mail,
  Smartphone,
  Shield
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { cn } from '../lib/utils';

export default function Profile() {
  const { user, logout } = useAuthStore();

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Profile Header */}
      <section className="bg-white rounded-[48px] border border-slate-100 shadow-sm overflow-hidden min-h-[400px] flex flex-col">
        <div className="h-48 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute -bottom-16 left-8 sm:left-12 flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="relative group">
              <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-[40px] bg-white p-1.5 shadow-2xl relative z-10 overflow-hidden border border-slate-100">
                <img 
                  src={`https://i.pravatar.cc/300?u=${user?.id}`} 
                  alt={user?.name} 
                  className="h-full w-full object-cover rounded-[34px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="absolute bottom-2 right-2 z-20 p-2 bg-indigo-600 text-white rounded-xl shadow-lg border-2 border-white hover:scale-110 transition-all">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm flex items-center">
                {user?.name}
                <Shield className="h-6 w-6 ml-3 text-indigo-200 fill-indigo-200/20" />
              </h1>
              <div className="flex flex-wrap items-center mt-2 gap-4 text-indigo-50/80 font-bold text-sm">
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {user?.college}</span>
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {user?.year} • {user?.department}</span>
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 hidden sm:flex space-x-4">
            <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all">
              <Settings className="h-5 w-5" />
            </button>
            <button 
              onClick={logout}
              className="p-3 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl text-white hover:bg-red-500/40 transition-all"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 mt-20 sm:mt-8 px-8 sm:px-12 pb-12 flex flex-col md:flex-row gap-12">
          {/* Main Info */}
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">About Me</h2>
              <p className="text-slate-700 font-medium text-lg leading-relaxed max-w-2xl">
                3rd Year CS Student at {user?.college}. Passionate about web development and UI design. I love helping peers with coding projects and formatting assignments!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-4 group cursor-pointer hover:bg-indigo-50 transition-all">
                <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{user?.email}</div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-4 group cursor-pointer hover:bg-indigo-50 transition-all">
                <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{user?.phone}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Logo Design', 'Python', 'Assignment Help', 'Tutoring', 'PPT Specialist'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold border border-indigo-100/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="w-full md:w-80 space-y-8">
            <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl shadow-slate-200">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Performance</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-indigo-300" />
                    </div>
                    <span className="text-sm font-bold">Gigs Completed</span>
                  </div>
                  <span className="text-2xl font-black">{user?.stats.gigsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Star className="h-5 w-5 text-amber-300" />
                    </div>
                    <span className="text-sm font-bold">Total Rating</span>
                  </div>
                  <span className="text-2xl font-black">{user?.stats.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Award className="h-5 w-5 text-emerald-300" />
                    </div>
                    <span className="text-sm font-bold">Badges</span>
                  </div>
                  <span className="text-2xl font-black">4</span>
                </div>
              </div>
              <button className="w-full mt-10 bg-white text-slate-900 py-4 rounded-3xl text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-all">
                View Full Portfolio
              </button>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Recent Badges</h3>
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group cursor-pointer hover:border-indigo-200 transition-all">
                    <Award className={cn(
                      "h-8 w-8",
                      i === 1 ? "text-amber-500" : i === 2 ? "text-slate-400" : i === 3 ? "text-indigo-400" : "text-rose-400"
                    )} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Tabs */}
      <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8">
        <div className="flex space-x-8 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {['Posted Gigs', 'Notes Shared', 'Marketplace Listings'].map((tab, i) => (
            <button
              key={tab}
              className={cn(
                "text-sm font-black uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 transition-all",
                i === 0 ? "text-indigo-600 border-indigo-600" : "text-slate-400 border-transparent hover:text-slate-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-[32px]">
          <Book className="h-12 w-12 text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Your history will appear here</p>
        </div>
      </section>
    </div>
  );
}
