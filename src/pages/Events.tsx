import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Zap, 
  Plus, 
  Ticket, 
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const mockEvents = [
  {
    id: 1,
    title: 'Manzar 2026: Cultural Fest',
    description: 'The biggest cultural fest of the year. Music, dance, drama, and more.',
    date: '2026-05-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    category: 'fest',
    organizer: 'Cultural Council',
    registrations: 1540,
    image: 'https://picsum.photos/seed/fest/1200/800',
    color: 'border-rose-500'
  },
  {
    id: 2,
    title: 'Code-a-Thon 3.0',
    description: '24-hour hackathon to build innovative solutions for local campus problems.',
    date: '2026-05-20',
    time: '09:00 AM',
    location: 'Innovation Lab',
    category: 'hackathon',
    organizer: 'Coding Club',
    registrations: 230,
    image: 'https://picsum.photos/seed/hack/1200/800',
    color: 'border-indigo-500'
  },
  {
    id: 3,
    title: 'Digital Marketing Workshop',
    description: 'Learn the basics of SEO, SEM, and Social Media Marketing from industry experts.',
    date: '2026-05-10',
    time: '02:00 PM',
    location: 'Seminar Hall 1',
    category: 'workshop',
    organizer: 'Entrepreneurship Cell',
    registrations: 45,
    image: 'https://picsum.photos/seed/workshop/1200/800',
    color: 'border-emerald-500'
  },
  {
    id: 4,
    title: 'Inter-College Cricket Finals',
    description: 'Cheer for our team in the final match of the sports championship.',
    date: '2026-05-05',
    time: '04:00 PM',
    location: 'Sports Ground',
    category: 'sports',
    organizer: 'Sports Committee',
    registrations: 890,
    image: 'https://picsum.photos/seed/sports/1200/800',
    color: 'border-amber-500'
  }
];

export default function Events() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Page Header */}
      <section className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Campus Events 🎪</h1>
          <p className="text-slate-500 font-medium">Register for upcoming fests, workshops, and competitions.</p>
        </div>
        <div className="flex space-x-4">
          <div className="hidden sm:flex items-center space-x-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <Search className="h-5 w-5 text-slate-400 ml-2" />
            <input type="text" placeholder="Search events..." className="bg-transparent border-none focus:ring-0 text-sm font-bold w-48" />
          </div>
          <button className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Plus className="mr-2 h-5 w-5 inline" />
            Organize
          </button>
        </div>
      </section>

      {/* Featured Event / Countdown */}
      <section className="relative group overflow-hidden rounded-[48px] aspect-[21/9] flex items-center p-8 lg:p-16">
        <img 
          src={mockEvents[0].image} 
          alt="Featured" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-[2px] brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Happening in 5 Days</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter">{mockEvents[0].title}</h2>
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-indigo-400" />
              <span className="font-bold">{mockEvents[0].date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-indigo-400" />
              <span className="font-bold">{mockEvents[0].location}</span>
            </div>
          </div>
          <button className="bg-white text-slate-900 px-10 py-5 rounded-[24px] text-lg font-black uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center group">
            Register for Free
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="flex overflow-x-auto scrollbar-hide space-x-4 pb-2">
        {['All Events', 'Workshops', 'Hackathons', 'Fests', 'Sports', 'Webinars'].map((cat) => (
          <button
            key={cat}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-black whitespace-nowrap transition-all border",
              cat === 'All Events' 
                ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200" 
                : "bg-white text-slate-500 border-slate-100 hover:bg-slate-50"
            )}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Events Grid */}
      <section className="grid lg:grid-cols-2 gap-8">
        {mockEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group bg-white rounded-[40px] border-4 border-transparent hover:border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row",
              event.color === 'border-rose-500' ? 'hover:border-rose-100' : 
              event.color === 'border-indigo-500' ? 'hover:border-indigo-100' :
              event.color === 'border-emerald-500' ? 'hover:border-emerald-100' :
              'hover:border-amber-100'
            )}
          >
            <div className="w-full sm:w-2/5 aspect-[4/5] sm:aspect-auto relative overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className={cn(
                  "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-lg",
                  event.category === 'fest' ? 'bg-rose-500' :
                  event.category === 'hackathon' ? 'bg-indigo-600' :
                  event.category === 'workshop' ? 'bg-emerald-600' :
                  'bg-amber-500'
                )}>
                  {event.category}
                </span>
              </div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">{event.title}</h3>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2">{event.description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-xs font-bold text-slate-600 uppercase tracking-widest">
                    <Calendar className="h-4 w-4 mr-2 text-indigo-500" /> {event.date} • {event.time}
                  </div>
                  <div className="flex items-center text-xs font-bold text-slate-600 uppercase tracking-widest">
                    <MapPin className="h-4 w-4 mr-2 text-indigo-500" /> {event.location}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center text-slate-400">
                  <Users className="h-4 w-4 mr-1.5" />
                  <span className="text-xs font-black uppercase tracking-widest">{event.registrations}+ Joining</span>
                </div>
                <button className="bg-slate-50 border border-slate-100 text-slate-900 p-4 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                  <Ticket className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
