import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  FileText, 
  Download, 
  Filter, 
  BookOpen, 
  GraduationCap, 
  Star, 
  ChevronRight,
  Plus,
  Eye,
  FileBadge
} from 'lucide-react';
import { cn } from '../lib/utils';

const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Electronics', 'Civil', 'Civil', 'Management'];
const semesters = ['All', '1', '2', '3', '4', '5', '6', '7', '8'];

const mockNotes = [
  {
    id: 1,
    title: 'Operating Systems - Final Notes',
    subject: 'CS302: Operating Systems',
    dept: 'Computer Science',
    semester: 5,
    author: 'Prof. Sharma (Sorted by Aryan)',
    downloads: 1240,
    rating: 4.9,
    isPremium: false,
    fileType: 'PDF',
    size: '12 MB'
  },
  {
    id: 2,
    title: 'Thermodynamics Lab Manual',
    subject: 'ME101: Thermodynamics',
    dept: 'Mechanical',
    semester: 3,
    author: 'Sumantha K.',
    downloads: 450,
    rating: 4.5,
    isPremium: true,
    fileType: 'PDF',
    size: '8 MB'
  },
  {
    id: 3,
    title: 'Previous Year Papers (2019-23)',
    subject: 'MA201: Discrete Maths',
    dept: 'Computer Science',
    semester: 4,
    author: 'Tattva Official',
    downloads: 5600,
    rating: 5.0,
    isPremium: false,
    fileType: 'Zipped',
    size: '25 MB'
  },
  {
    id: 4,
    title: 'Analog Electronics Basics',
    subject: 'EC202: Analog Electronics',
    dept: 'Electronics',
    semester: 4,
    author: 'Rahul P.',
    downloads: 180,
    rating: 4.2,
    isPremium: false,
    fileType: 'Handwritten',
    size: '45 MB'
  }
];

export default function Notes() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedSem, setSelectedSem] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = mockNotes.filter(note => 
    (selectedDept === 'All' || note.dept === selectedDept) &&
    (selectedSem === 'All' || note.semester.toString() === selectedSem) &&
    (note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     note.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Search Hub */}
      <section className="bg-indigo-600 p-8 lg:p-12 rounded-[48px] text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -translate-x-20 translate-y-20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">The Ultimate Study Hub 📚</h1>
          <p className="text-indigo-100 text-lg mb-10 font-medium">Access verified notes, previous year papers, and lab manuals from top-performing students.</p>
          
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by subject code, name, or semester..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white rounded-3xl text-slate-900 font-bold focus:outline-none shadow-xl focus:ring-4 focus:ring-indigo-300 transition-all text-lg" 
            />
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="h-5 w-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Filter by Dept</h3>
            </div>
            <div className="space-y-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between",
                    selectedDept === dept 
                      ? "bg-indigo-50 text-indigo-700" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {dept}
                  {selectedDept === dept && <ChevronRight className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-5 w-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Semester</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {semesters.map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSem(sem)}
                  className={cn(
                    "py-2 rounded-xl text-xs font-bold transition-all border",
                    selectedSem === sem 
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100" 
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {sem === 'All' ? 'All' : `S${sem}`}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg">
            <Plus className="mr-2 h-5 w-5" />
            Upload Your Notes
          </button>
        </aside>

        {/* Notes Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Showing {filteredNotes.length} Results
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-slate-400">Sort by:</span>
              <select className="bg-transparent text-sm font-bold text-indigo-600 border-none focus:ring-0">
                <option>Popularity</option>
                <option>Recent</option>
                <option>Downloads</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredNotes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
                      <FileText className="h-7 w-7" />
                    </div>
                    {note.isPremium ? (
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center border border-amber-200">
                        <FileBadge className="h-3 w-3 mr-1" /> Premium
                      </span>
                    ) : (
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                        Free
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 line-clamp-1">{note.title}</h3>
                  <p className="text-sm font-bold text-slate-500 mb-4">{note.subject}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">{note.dept}</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">Sem {note.semester}</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">{note.fileType}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="flex items-center text-amber-500 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={cn("h-3 w-3", s <= Math.floor(note.rating) ? "fill-current" : "text-slate-200")} />
                      ))}
                      <span className="ml-1 text-[10px] font-black text-slate-400">{note.rating}</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {note.downloads} Downloads
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-3 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
