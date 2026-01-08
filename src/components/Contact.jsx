'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] bg-primary text-white">
      <div className="container-custom grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[28px] font-light mb-8">تواصل معنا</h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-md text-[16px]">
            نسعد بتواصلكم معنا للإجابة على استفساراتكم وتقديم الحلول العقارية المناسبة لاحتياجاتكم.
          </p>

          <div className="space-y-[20px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[14px] text-gray-400">الهاتف / الرقم الموحد</p>
                <p className="text-[16px] dir-ltr text-right">0509996115</p>
                <p className="text-[16px] dir-ltr text-right">92000-7936</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[14px] text-gray-400">البريد الإلكتروني</p>
                <p className="text-[16px]">MSC22@OUTLOOK.SA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[14px] text-gray-400">العنوان</p>
                <p className="text-[16px]">المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-primary p-8 md:p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-[14px] font-medium mb-2">الاسم</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-[14px] focus:outline-none focus:border-accent transition" placeholder="الاسم الكامل" />
            </div>
            <div>
              <label className="block text-[14px] font-medium mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-[14px] focus:outline-none focus:border-accent transition" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block text-[14px] font-medium mb-2">الرسالة</label>
              <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 p-3 text-[14px] focus:outline-none focus:border-accent transition" placeholder="اكتب رسالتك هنا..."></textarea>
            </div>
            <button className="w-full bg-primary text-white h-[52px] text-[14px] tracking-wide hover:bg-accent hover:text-white transition duration-300">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
