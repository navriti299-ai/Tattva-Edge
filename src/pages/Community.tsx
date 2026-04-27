import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  MessageSquare, 
  Search, 
  Plus, 
  ShieldCheck, 
  Globe, 
  Hash, 
  TrendingUp,
  MessageCircle,
  ThumbsUp,
  Share2,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const discussions = [
  {
    id: 1,
    author: 'Rahul Khanna',
    college: 'IIT Delhi',
    avatar: 'https://i.pravatar.cc/100?u=rahul',
    content: "Is anyone here interested in forming a team for the upcoming National Robotics Challenge? Looking for one more mechanical student! 🦾",
    likes: 24,
    comments: 12,
    time: '2h ago',
    tag: 'Collaboration'
  },
  {
    id: 2,
    author: 'Neha Bajaj',
    college: 'NSUT',
    avatar: 'https://i.pravatar.cc/100?u=neha',
    content: "The library needs a quiet zone policy. It's getting too loud during exam season. Thoughts? 📚",
    likes: 85,
    comments: 45,
    time: '5h ago',
    tag: 'Discussion'
  },
  {
    id: 3,
    author: 'Campus News',
    college: 'Official',
    avatar: 'https://i.pravatar.cc/100?u=official',
    content: "Registration for 'Tattva Premium' is now open for our campus! Use code CAMPUS50 for 50% off. 🚀",
    likes: 156,
    comments: 5,
    time: '1d ago',
    tag: 'Announcement'
  }
];

const clubs = [
  { name: 'Coding Club', members: '1.2k', type: 'Technical' },
  { name: 'Art Circle', members: '450', type: 'Cultural' },
  { name: 'EDM Society', members: '890', type: 'Music' },
  { name: 'DebSoc', members: '320', type: 'Debate' },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('Discussions');

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Campus Community 🤝</h1>
          <p className="text-slate-500 font-medium">Connect with peers, join clubs, and start discussions.</p>
        </div>
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <img key={i} src={`https://i.pravatar.cc/100?u=${i*10}`} className="h-12 w-12 rounded-full border-4 border-white shadow-sm" alt="Member" referrerPolicy="no-referrer" />
          ))}
          <div className="h-12 w-12 rounded-full bg-slate-900 border-4 border-white shadow-sm flex items-center justify-center text-[10px] font-black text-white">+500</div>
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Left: Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-6">Trending Clubs</h3>
            <div className="space-y-4">
              {clubs.map((club) => (
                <div key={club.name} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {club.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 tracking-tight">{club.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{club.members} Members</div>
                    </div>
                  </div>
                  <button className="text-indigo-600 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-2xl bg-slate-50 text-slate-600 text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors">
              Explore All Clubs
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[40px] text-white shadow-xl shadow-indigo-100">
            <ShieldCheck className="h-10 w-10 mb-6 text-indigo-200" />
            <h3 className="text-xl font-black mb-4 tracking-tight leading-tight">Verified Campus Channels</h3>
            <p className="text-sm text-indigo-100 font-medium mb-8 leading-relaxed">Join channels specific to your department or year for localized news and updates.</p>
            <button className="w-full bg-white text-indigo-700 py-4 rounded-3xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:-translate-y-1 transition-all">
              Join CS Department Channel
            </button>
          </div>
        </aside>

        {/* Center: Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="flex space-x-4 mb-6">
              {['Discussions', 'Announcements', 'Q&A'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                    activeTab === tab 
                      ? "bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100" 
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <input 
                type="text" 
                placeholder="Start a discussion... what's on your mind?"
                className="bg-transparent border-none focus:ring-0 text-sm font-bold text-slate-900 w-full"
              />
              <button className="bg-slate-900 border border-slate-800 p-2 text-white rounded-xl hover:bg-indigo-600 transition-colors">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {discussions.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm group hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <img src={post.avatar} className="h-12 w-12 rounded-full border-4 border-slate-50 shadow-sm" alt={post.author} referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-black text-slate-900 flex items-center">
                        {post.author}
                        {post.author === 'Campus News' && <ShieldCheck className="h-4 w-4 ml-2 text-indigo-600 fill-indigo-50" />}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.college} • {post.time}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    {post.tag}
                  </span>
                </div>
                
                <p className="text-slate-700 text-lg font-medium leading-relaxed mb-8">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-slate-400 hover:text-indigo-600 transition-colors group/btn">
                      <div className="p-2 rounded-xl group-hover/btn:bg-indigo-50 transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-400 hover:text-indigo-600 transition-colors group/btn">
                      <div className="p-2 rounded-xl group-hover/btn:bg-indigo-50 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">{post.comments}</span>
                    </button>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Trends & News */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <TrendingUp className="h-32 w-32 -rotate-12" />
            </div>
            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-8 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-rose-500" />
              Campus Buzz
            </h3>
            <div className="space-y-6">
              {[
                { tag: 'Manzar2026', count: '2.4k posts' },
                { tag: 'HackTheFuture', count: '1.2k posts' },
                { tag: 'HostelFoodReview', count: '890 posts' },
                { tag: 'NotesLeak', count: '540 posts' }
              ].map((trend) => (
                <div key={trend.tag} className="group cursor-pointer">
                  <div className="text-sm font-black text-slate-800 tracking-tight hover:text-indigo-600 transition-colors">#{trend.tag}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{trend.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[40px] text-white overflow-hidden relative">
            <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-indigo-600/20 blur-[100px]" />
            <h3 className="text-xl font-black mb-4 tracking-tight relative z-10 leading-tight">Project Teammate Finder</h3>
            <p className="text-sm text-slate-400 font-medium mb-10 leading-relaxed relative z-10">Searching for developers, designers, or marketers for your next project?</p>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-[22px] font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-900/50 hover:bg-indigo-700 transition-all relative z-10">
              Create Project Listing
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
