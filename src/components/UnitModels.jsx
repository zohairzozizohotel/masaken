'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function UnitModels() {
  const [units, setUnits] = useState([]);

  const fetchUnits = useCallback(async () => {
    const { data } = await supabase
      .from('units')
      .select('id, unit_number, type, size, price, status, main_image, model_details, model_count')
      .order('created_at', { ascending: false });
    if (data) {
      const mapped = data.map((u) => ({
        id: u.id,
        title: u.unit_number || 'نموذج',
        type: u.type || 'وحدة',
        area: u.size || '-',
        price: u.price ? Number(u.price).toLocaleString() : '-',
        image: u.main_image || '/images/4.jpg',
        status: u.status === 'available' ? 'متاح' : u.status === 'reserved' ? 'محجوزة' : 'مباعة',
        features: [],
        beds: null,
        baths: null,
        details: u.model_details || '',
        count: u.model_count ?? null,
      }));
      setUnits(mapped);
    }
  }, []);

  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);

  return (
    <section className="py-[120px] bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FAF9F6] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[40px] font-extralight tracking-wide text-primary mb-4">
              نماذج <span className="text-accent font-serif font-medium">الوحدات</span>
            </h2>
            <div className="w-[60px] h-[2px] bg-accent/50 mx-auto" />
            <p className="mt-6 text-secondary-text max-w-2xl mx-auto font-light leading-relaxed">
              استكشف تشكيلة واسعة من الوحدات السكنية المصممة بعناية لتناسب أسلوب حياتك
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <UnitCard key={unit.id} unit={unit} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-none text-[15px] font-medium tracking-wide">
                <span>تواصل معنا للمزيد</span>
                <ArrowLeft className="w-4 h-4 mr-2" />
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
      className="group bg-white border border-border-light hover:border-accent/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-[250px] overflow-hidden bg-gray-100">
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[12px] font-medium text-primary shadow_sm border border-gray-100">
          {unit.type}
        </div>
        {unit.status === "متاح" && (
            <div className="absolute top-4 left-4 z-20 bg-green-500/90 backdrop-blur-sm px-3 py-1 text-[12px] font-medium text-white shadow-sm flex items-center gap-1">
                <CheckCircle2 size={12} /> متاح
            </div>
        )}
        
        {/* Placeholder for Image - Using color block if image fails, but expecting public images */}
        <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${unit.image})` }}
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[18px] font-medium text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {unit.title}
        </h3>
        
        <p className="text-secondary-text text-[13px] mb-4 line-clamp-2 min-h-[40px]">
          {unit.details || 'لا يوجد وصف متاح'}
        </p>

        <div className="flex items-center gap-4 text-secondary-text text-[13px] mb-6 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-1" title="المساحة">
                <Maximize2 size={14} className="text-accent" />
                <span>{unit.area} م²</span>
            </div>
            {unit.count !== null && (
               <div className="flex items-center gap-1" title="العدد المتاح">
                  <span className="text-accent font-medium">العدد:</span>
                  <span>{unit.count}</span>
               </div>
            )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex flex-col">
                <span className="text-[12px] text-secondary-text">يبدأ من</span>
                <span className="text-[18px] font-medium text-primary font-serif">
                    {unit.price} <span className="text-[12px] font-sans font-light">ر.س</span>
                </span>
            </div>
            
            <a 
                    href={`https://wa.me/966570109444?text=استفسار عن ${unit.title}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <ArrowLeft size={18} />
                  </a>
        </div>
      </div>
    </motion.div>
  );
}
