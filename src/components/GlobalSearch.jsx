'use client';
import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, Building2, Home } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function GlobalSearch({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({ projects: [], units: [] });
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  // Handle Search
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length < 2) {
        setResults({ projects: [], units: [] });
        return;
      }

      setLoading(true);
      try {
        console.log('Searching for:', searchTerm); // Debug Log

        // Search Projects
        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('id, name, location, main_image, description')
          .or(`name.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
          .limit(5);

        if (projectsError) console.error('Projects Search Error:', projectsError);
        else console.log('Projects Found:', projectsData?.length);

        // Search Units (and join with projects to get project name)
        // Corrected table name from 'project_units' to 'units'
        const { data: unitsData, error: unitsError } = await supabase
          .from('units')
          .select('id, type, project_id, size, model_details')
          .or(`type.ilike.%${searchTerm}%,model_details.ilike.%${searchTerm}%`)
          .limit(5);

        if (unitsError) console.error('Units Search Error:', unitsError);
        else console.log('Units Found:', unitsData?.length);
        
        // Fetch project names for units if needed
        let unitsWithProjects = [];
        if (unitsData && unitsData.length > 0) {
            const projectIds = [...new Set(unitsData.map(u => u.project_id))];
            const { data: projectsForUnits } = await supabase
                .from('projects')
                .select('id, name')
                .in('id', projectIds);
            
            unitsWithProjects = unitsData.map(unit => ({
                ...unit,
                project_name: projectsForUnits?.find(p => p.id === unit.project_id)?.name || ''
            }));
        }

        setResults({
          projects: projectsData || [],
          units: unitsWithProjects || []
        });

      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleClose = () => {
    setSearchTerm('');
    setResults({ projects: [], units: [] });
    onClose();
  };

  const handleNavigate = (path) => {
    router.push(path);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Search Container */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full bg-white shadow-xl border-b border-gray-100 overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header / Input Area */}
            <div className="container-custom mx-auto py-6">
                <div className="relative flex items-center gap-4">
                    <Search className="text-gray-400 w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="ابحث عن مشروع، وحدة، حي، أو تفاصيل..."
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pr-14 pl-12 text-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <button 
                        onClick={handleClose}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto bg-gray-50/50">
                <div className="container-custom mx-auto py-6 pb-12">
                    {loading ? (
                        <div className="flex items-center justify-center py-12 text-gray-400">
                            <Loader2 className="w-8 h-8 animate-spin" />
                            <span className="mr-3">جاري البحث...</span>
                        </div>
                    ) : (
                        searchTerm.length > 1 && (
                            <div className="space-y-8">
                                {/* Projects Results */}
                                {results.projects.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-gray-500 px-2 flex items-center gap-2">
                                            <Building2 size={16} />
                                            المشاريع
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {results.projects.map(project => (
                                                <div 
                                                    key={project.id}
                                                    onClick={() => handleNavigate(`/projects/${project.id}`)}
                                                    className="bg-white p-3 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md cursor-pointer transition-all flex gap-4 items-center group"
                                                >
                                                    <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                                        <img 
                                                            src={project.main_image || '/images/placeholder.jpg'} 
                                                            alt={project.name} 
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{project.name}</h4>
                                                        <p className="text-xs text-gray-500 truncate mt-1">{project.location}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Units Results */}
                                {results.units.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-gray-500 px-2 flex items-center gap-2">
                                            <Home size={16} />
                                            الوحدات
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {results.units.map(unit => (
                                                <div 
                                                    key={unit.id}
                                                    onClick={() => handleNavigate(`/projects/${unit.project_id}`)}
                                                    className="bg-white p-4 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md cursor-pointer transition-all group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 group-hover:text-accent transition-colors">{unit.type}</h4>
                                                            <p className="text-xs text-gray-500 mt-1">مشروع: {unit.project_name}</p>
                                                        </div>
                                                        {unit.size && (
                                                            <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md">
                                                                {unit.size} م²
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* No Results */}
                                {results.projects.length === 0 && results.units.length === 0 && (
                                    <div className="text-center py-12 text-gray-400">
                                        <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p>لا توجد نتائج مطابقة لـ "{searchTerm}"</p>
                                    </div>
                                )}
                            </div>
                        )
                    )}
                    
                    {!searchTerm && (
                        <div className="text-center py-12 text-gray-400 text-sm">
                            ابدأ الكتابة للبحث عن مشاريع، وحدات سكنية، أو أحياء...
                        </div>
                    )}
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
