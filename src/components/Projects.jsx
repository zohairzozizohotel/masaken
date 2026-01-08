'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { supabase, supabaseUrl } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function Projects() {
  const [items, setItems] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  const fetchProjects = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id, name, location, status, main_image')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      if (data) {
        const mapped = data.map((p) => ({
          id: p.id,
          title: p.name || 'مشروع',
          location: p.location || 'غير محدد',
          status: p.status === 'ongoing' ? 'قيد الإنشاء' : p.status === 'completed' ? 'مكتمل' : 'قريباً',
          image: p.main_image || '/images/4.jpg',
          category: 'مشروع',
        }));
        setItems(mapped);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, []);

  useEffect(() => {
    console.log('Supabase URL:', supabaseUrl);
    fetchProjects();
  }, [fetchProjects]);

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-[120px] bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-[32px] font-extralight tracking-wide text-primary mb-4">
            مشاريعنا <span className="text-accent font-medium">المتميزة</span>
          </h2>
          <div className="w-[60px] h-[2px] bg-accent/50 mx-auto mb-8" />
          <p className="text-secondary-text max-w-2xl mx-auto text-[16px] leading-relaxed">
            نفخر بإدارة وتسويق نخبة من المشاريع العقارية التي تمثل علامة فارقة في الجودة والتصميم، لنقدم لعملائنا فرصاً استثمارية وسكنية استثنائية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] overflow-hidden cursor-pointer rounded-2xl"
              >
                <div className="absolute inset-0 bg-gray-200">
                  {!imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400">صورة {project.title}</span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="absolute top-8 right-8">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[12px] tracking-wider uppercase text-white rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-[24px] font-light mb-2">{project.title}</h3>

                    <div className="flex items-center text-white/80 text-[14px] mb-6">
                      <MapPin className="w-4 h-4 ml-2 text-accent" />
                      <span>{project.location}</span>
                      <span className="mx-3 text-white/30">|</span>
                      <span className="text-accent">{project.status}</span>
                    </div>

                    <div className="flex items-center text-[14px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>عرض التفاصيل</span>
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
