import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Briefcase, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Plus,
  Star,
  Zap,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['All', 'PPT Making', 'Tutoring', 'Graphic Design', 'Coding', 'Writing'];

const mockGigs = [
  {
    id: 1,
    title: 'Research Paper Formatting',
    description: 'Need help formatting an APA style research paper for Psychology. About 20 pages.',
    budget: 800,
    category: 'Writing',
    postedBy: 'Ananya S.',
    postedAt: '2h ago',
    location: 'Hostel Block C',
    tags: ['Academic', 'Urgent']
  },
  {
    id: 2,
    title: 'Python Script for Data Analytics',
    description: 'A small script to clean a CSV file and generate 3 plots using Matplotlib.',
    budget: 1500,
    category: 'Coding',
    postedBy: 'Vikram R.',
    postedAt: '5h ago',
    location: 'Remote',
    tags: ['CS Dept', 'Paid']
  },
  {
    id: 3,
    title: 'Logo Design for College Fest',
    description: 'Need a minimalist logo for the upcoming cultural fest "Manzar 2026".',
    budget: 1200,
    category: 'Graphic Design',
    postedBy: 'Event Admin',
    postedAt: '1d ago',
    location: 'Student Hub',
    tags: ['Design', 'Featured']
  },
  {
    id: 4,
    title: 'Private Tutor for Engineering Mechanics',
    description: 'Looking for a senior who can teach basic mechanics concepts for sessional exams.',
    budget: 500,
    unit: '/hr',
    category: 'Tutoring',
    postedBy: 'Rahul K.',
    postedAt: '2d ago',
    location: 'Library',
    tags: ['Education']
  }
];

export default function GigMarket() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGigs = mockGigs.filter(gig => 
    (selectedCategory === 'All' || gig.category === selectedCategory) &&
    (gig.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     gig.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Header & Search */}
      <section className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Gig Marketplace 🚀</h1>
            <p className="text-slate-500 font-medium">Find student-friendly tasks and earn on your schedule.</p>
          </div>
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-0.5">
            <Plus className="mr-2 h-5 w-5" />
            Post a Gig
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tasks, skills, or budget..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium text-slate-900" 
            />
          </div>
          <button className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter className="mr-2 h-5 w-5 text-slate-400" />
            Filters
          </button>
        </div>

        <div className="flex overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                  selectedCategory === cat 
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gigs List */}
      <section className="grid lg:grid-cols-2 gap-6">
        {filteredGigs.map((gig, i) => (
          <motion.div
            key={gig.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Briefcase className="h-24 w-24 -rotate-12 translate-x-8 -translate-y-8" />
            </div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {gig.category}
                </span>
                {gig.tags.includes('Urgent') && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-50 text-red-700 border border-red-100">
                    <Zap className="h-3 w-3 mr-1" />
                    Urgent
                  </span>
                )}
              </div>
              <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 tracking-tight">
              {gig.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 line-clamp-2">
              {gig.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Budget</div>
                <div className="text-2xl font-black text-indigo-600 tracking-tighter">
                  ₹{gig.budget}{gig.unit || ''}
                </div>
              </div>
              <div className="flex flex-col justify-center items-end">
                <div className="flex items-center text-xs font-bold text-slate-500 mb-1">
                  <Clock className="h-3 w-3 mr-1" /> {gig.postedAt}
                </div>
                <div className="flex items-center text-xs font-bold text-slate-500">
                  <MapPin className="h-3 w-3 mr-1" /> {gig.location}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold border border-white shadow-sm overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${gig.postedBy}`} alt={gig.postedBy} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{gig.postedBy}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                    Verified <CheckCircle2 className="h-2 w-2 ml-1 text-green-500" />
                  </div>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-100 transition-all">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Empty State */}
      {filteredGigs.length === 0 && (
        <section className="py-20 text-center bg-white rounded-[40px] border border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-slate-300" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No matching gigs found</h2>
          <p className="text-slate-500 max-w-sm mx-auto font-medium">Try adjusting your filters or search keywords to find more opportunities.</p>
        </section>
      )}
    </div>
  );
}
