import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Search, Moon, Sun } from 'lucide-react';

const t = {
  en: { home:'Home', collections:'Collections', newArrivals:'New Arrivals', bridal:'Bridal Collection', about:'About Us', contact:'Contact', login:'Login', title:'Padmavati Bangle Store', hero:'Timeless Bridal Elegance', heroSub:'Luxury bangles handcrafted for weddings, festivals and everyday royal style.', search:'Search bangles', sortPop:'Sort: Popular', low:'Price: Low to High', high:'Price: High to Low', add:'Add to Cart', quick:'Quick View', newsletter:'Newsletter subscription', owners:'Owners: Narayan Singh & Govind Singh' },
  hi: { home:'होम', collections:'कलेक्शंस', newArrivals:'नए आगमन', bridal:'ब्राइडल कलेक्शन', about:'हमारे बारे में', contact:'संपर्क', login:'लॉगिन', title:'पद्मावती बैंगल स्टोर', hero:'सदा सुहागन शाही सुंदरता', heroSub:'शादियों, त्योहारों और रोज़मर्रा की शाही शैली के लिए हस्तनिर्मित प्रीमियम चूड़ियाँ।', search:'चूड़ियाँ खोजें', sortPop:'सॉर्ट: लोकप्रिय', low:'कीमत: कम से ज्यादा', high:'कीमत: ज्यादा से कम', add:'कार्ट में जोड़ें', quick:'झटपट देखें', newsletter:'न्यूज़लेटर सदस्यता', owners:'मालिक: नारायण सिंह और गोविंद सिंह' },
  te: { home:'హోమ్', collections:'కలెక్షన్స్', newArrivals:'కొత్తవి', bridal:'బ్రైడల్ కలెక్షన్', about:'మా గురించి', contact:'సంప్రదించండి', login:'లాగిన్', title:'పద్మావతి బాంగిల్ స్టోర్', hero:'శాశ్వత వధువు ఔన్నత్యం', heroSub:'వివాహాలు, పండుగలు మరియు రోజువారీ రాజసమైన శైలికి చేతిపని విలాసవంతమైన గాజులు.', search:'గాజులను వెతకండి', sortPop:'క్రమబద్ధం: ప్రాచుర్యం', low:'ధర: తక్కువ నుండి ఎక్కువ', high:'ధర: ఎక్కువ నుండి తక్కువ', add:'కార్ట్‌లో జోడించండి', quick:'త్వరిత వీక్షణ', newsletter:'న్యూస్‌లెటర్ సభ్యత్వం', owners:'యజమానులు: నారాయణ సింగ్ & గోవింద్ సింగ్' }
};
const categories = ['All','Bridal Bangles','Traditional Bangles','Gold-Plated Bangles','Daily Wear Bangles','Designer Bangles','Kids Bangles'];
const products = [
  { id: 1, name: 'Royal Bridal Kundan Set', category: 'Bridal Bangles', price: 7999, rating: 4.9, img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Temple Craft Traditional', category: 'Traditional Bangles', price: 3499, rating: 4.7, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Gold-Plated Sparkle', category: 'Gold-Plated Bangles', price: 4199, rating: 4.8, img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Rose Daily Wear', category: 'Daily Wear Bangles', price: 1499, rating: 4.5, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80' }
];

export default function App() {
  const [lang, setLang] = useState('en');
  const tx = t[lang];
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');
  const [dark, setDark] = useState(false);
  const filtered = useMemo(() => {
    let list = products.filter((p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [search, category, sort]);
  return (
    <div className={dark ? 'dark' : ''}>
      <div className='min-h-screen bg-cream dark:bg-zinc-900 dark:text-cream text-maroon'>
        <nav className='sticky top-0 z-40 glass px-6 py-3 flex items-center justify-between gap-3'>
          <h1 className='font-luxe text-xl'>{tx.title}</h1>
          <div className='hidden md:flex gap-5 text-sm'>{[tx.home,tx.collections,tx.newArrivals,tx.bridal,tx.about,tx.contact,tx.login].map(i=><a key={i}>{i}</a>)}</div>
          <div className='flex items-center gap-2'>
            <select className='rounded-lg p-1 text-sm dark:bg-zinc-800' value={lang} onChange={(e)=>setLang(e.target.value)}>
              <option value='en'>English</option><option value='hi'>हिंदी</option><option value='te'>తెలుగు</option>
            </select>
            <button onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</button>
          </div>
        </nav>
        <section className='relative p-10 md:p-20 bg-gradient-to-r from-maroon to-rose text-cream'>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className='font-luxe text-4xl md:text-6xl'>{tx.hero}</h2><p className='mt-4 max-w-xl'>{tx.heroSub}</p>
          </motion.div>
        </section>
        <section className='p-6 md:p-12'>
          <div className='grid md:grid-cols-4 gap-3 mb-6'>
            <div className='flex items-center gap-2 bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-luxe'><Search size={18}/><input className='bg-transparent w-full outline-none' placeholder={tx.search} value={search} onChange={(e)=>setSearch(e.target.value)} /></div>
            <select className='rounded-xl p-3 dark:bg-zinc-800' onChange={e=>setCategory(e.target.value)}>{categories.map((c)=><option key={c}>{c}</option>)}</select>
            <select className='rounded-xl p-3 dark:bg-zinc-800' onChange={e=>setSort(e.target.value)}><option value='popular'>{tx.sortPop}</option><option value='low'>{tx.low}</option><option value='high'>{tx.high}</option></select>
          </div>
          <AnimatePresence><div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>{filtered.map((p) => <motion.article key={p.id} layout whileHover={{ y: -4 }} className='bg-white dark:bg-zinc-800 rounded-2xl shadow-luxe overflow-hidden'><img src={p.img} className='h-48 w-full object-cover' /><div className='p-4'><h3 className='font-semibold'>{p.name}</h3><p className='text-sm'>{p.category}</p><p className='text-gold font-bold mt-1'>₹{p.price}</p><p className='text-xs'>⭐ {p.rating} reviews</p><div className='flex gap-2 mt-3'><button className='p-2 rounded-full bg-rose/20'><Heart size={16}/></button><button className='flex-1 bg-maroon text-cream rounded-xl py-2 text-sm'>{tx.add}</button></div><button className='text-xs mt-2 underline'>{tx.quick}</button></div></motion.article>)}</div></AnimatePresence>
        </section>
        <footer className='bg-maroon text-cream p-10 grid md:grid-cols-3 gap-4'><div><h4 className='font-luxe'>{tx.title}</h4><p>{tx.owners}</p></div><div><p>{tx.newsletter}</p><input className='mt-2 rounded-lg p-2 text-maroon w-full' placeholder='Email'/></div><div><p>Instagram · Facebook · YouTube</p><p>© 2026</p></div></footer>
      </div>
    </div>
  );
}
