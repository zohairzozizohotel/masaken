'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowLeft, CheckCircle2, BedDouble, Bath, Home, ArrowUpRight } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function UnitModels() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchUnits = async () => {
      const { data } = await supabase
        .from('units')
        .select('id, unit_number, type, size, price, status, main_image, model_details, model_count')
        .order('created_at', { ascending: false });
      if (data) {
        const mapped = data.map((u) => ({
          id: u.id,
          title: u.unit_number || 'نموذج سكني',
          type: u.type || 'وحدة سكنية',
          area: u.size || '-',
          price: u.price ? Number(u.price).toLocaleString() : '-',
          image: u.main_image || '/images/4.jpg',
          status: u.status === 'available' ? 'متاح' : u.status === 'reserved' ? 'محجوزة' : 'مباعة',
          details: u.model_details || '',
          count: u.model_count ?? null,
        }));
        setUnits(mapped);
      }
    };

    fetchUnits();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/3 -skew-x-12 translate-x-1/3 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              نماذج <span className="text-accent">الوحدات السكنية</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              نقدم لكم مجموعة متنوعة من النماذج السكنية المصممة بعناية فائقة لتلبي كافة احتياجاتكم وتطلعاتكم للمستقبل.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <UnitCard key={unit.id} unit={unit} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
                <span className="font-medium">تواصل معنا للمزيد</span>
                <ArrowLeft className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
}

function UnitCard({ unit, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden bg-gray-100">
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-primary shadow-sm border border-gray-100 flex items-center gap-1">
            <Home size={12} className="text-accent" />
            {unit.type}
          </span>
        </div>
        
        {unit.status === "متاح" && (
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-md rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1">
                  <CheckCircle2 size={12} /> متاح
              </span>
            </div>
        )}
        
        <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${unit.image})` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {unit.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed h-[40px]">
          {unit.details || 'تصميم عصري ومساحات رحبة تناسب جميع الأذواق.'}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-gray-50">
            <div className="flex items-center gap-2 text-gray-600">
                <Maximize2 size={16} className="text-accent/80" />
                <span className="text-sm font-medium">{unit.area} م²</span>
            </div>
            {unit.count !== null && (
               <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xs text-gray-400">العدد:</span>
                  <span className="text-sm font-medium">{unit.count}</span>
               </div>
            )}
        </div>

        <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-xs text-gray-400 mb-1">يبدأ من</span>
                <span className="text-lg font-bold text-primary font-serif">
                    {unit.price} <span className="text-xs font-sans font-normal text-gray-500">ر.س</span>
                </span>
            </div>
            
            <a 
              href={`https://wa.me/966570109444?text=استفسار عن ${unit.title}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-primary hover:bg-accent hover:text-white transition-all duration-300 group-hover:scale-110"
              title="تواصل عبر واتساب"
            >
              <ArrowUpRight size={20} />
            </a>
        </div>
      </div>
    </motion.div>
  );
}
