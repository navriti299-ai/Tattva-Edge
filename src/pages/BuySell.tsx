import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingBag, 
  Tag, 
  MapPin, 
  Filter, 
  Plus, 
  MessageCircle, 
  Heart,
  Smartphone,
  Book,
  Camera,
  Bike
} from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { name: 'All', icon: ShoppingBag },
  { name: 'Books', icon: Book },
  { name: 'Electronics', icon: Smartphone },
  { name: 'Hostel Gear', icon: Tag },
  { name: 'Transport', icon: Bike },
  { name: 'Accessories', icon: Camera },
];

const mockProducts = [
  {
    id: 1,
    title: 'Casio Scientific Calculator fx-991EX',
    price: 900,
    condition: 'Like New',
    category: 'Electronics',
    postedBy: 'Samarth T.',
    postedAt: '4h ago',
    location: 'Boys Hostel 2',
    image: 'https://picsum.photos/seed/calc1/400/300'
  },
  {
    id: 2,
    title: 'Engineering Physics - 1st Year Textbook',
    price: 350,
    condition: 'Used',
    category: 'Books',
    postedBy: 'Priya M.',
    postedAt: '12h ago',
    location: 'Girls Hostel 1',
    image: 'https://picsum.photos/seed/book1/400/300'
  },
  {
    id: 3,
    title: 'Study Table Lamp (Adjustable)',
    price: 450,
    condition: 'Good',
    category: 'Hostel Gear',
    postedBy: 'Aryan S.',
    postedAt: '1d ago',
    location: 'Hostel A',
    image: 'https://picsum.photos/seed/lamp/400/300'
  },
  {
    id: 4,
    title: 'Hercules Cycle (21 Speed)',
    price: 4500,
    condition: 'Used',
    category: 'Transport',
    postedBy: 'Kunal G.',
    postedAt: '2d ago',
    location: 'Cycle Stand',
    image: 'https://picsum.photos/seed/bike/400/300'
  }
];

export default function BuySell() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    (product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Search & Action */}
      <section className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Campus Marketplace 🛍️</h1>
            <p className="text-slate-500 font-medium">Buy and sell second-hand items within your college.</p>
          </div>
          <button className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-1">
            <Plus className="mr-2 h-5 w-5" />
            Sell Item
          </button>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-bold text-slate-900" 
            />
          </div>
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={cn(
                  "flex items-center px-6 py-4 rounded-2xl text-sm font-bold transition-all whitespace-nowrap",
                  selectedCategory === cat.name 
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-200"
                )}
              >
                <cat.icon className={cn("mr-2 h-5 w-5", selectedCategory === cat.name ? "text-indigo-400" : "text-slate-400")} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 border border-white/20">
                {product.condition}
              </div>
              <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                <Heart className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-indigo-600 px-3 py-1.5 rounded-xl text-sm font-black text-white shadow-lg">
                ₹{product.price}
              </div>
            </div>

            <div className="p-5">
              <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1">{product.category}</div>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-4">{product.title}</h3>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold overflow-hidden border border-white shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${product.postedBy}`} alt={product.postedBy} referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500">{product.postedBy}</div>
                </div>
                <div className="flex items-center text-[10px] font-bold text-slate-400">
                  <MapPin className="h-3 w-3 mr-0.5" /> {product.location}
                </div>
              </div>

              <button className="w-full mt-5 flex items-center justify-center space-x-2 bg-slate-50 text-slate-900 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Seller</span>
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Filters Empty State */}
      {filteredProducts.length === 0 && (
        <section className="py-20 text-center">
          <ShoppingBag className="h-16 w-16 text-slate-200 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">No items found</h2>
          <p className="text-slate-500 max-w-sm mx-auto font-medium">Try searching for something else or change the category.</p>
        </section>
      )}
    </div>
  );
}
