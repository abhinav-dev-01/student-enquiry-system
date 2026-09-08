import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingContactButtons() {
  const whatsappNumber = "919249046898";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Origami%20Learning%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`;
  const callNumber = "+917012743030";

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
      
      {/* Quick Direct Call Floating Action */}
      <div className="relative flex items-center pointer-events-auto">
        <a
          href={`tel:${callNumber}`}
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0D1E32] hover:bg-[#1E3A5F] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(13,30,50,0.3)] hover:shadow-[0_12px_28px_rgba(13,30,50,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
          aria-label="Call Admissions"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#25ABE2]" />
        </a>
      </div>

      {/* WhatsApp Floating Action with Pulse Ring */}
      <div className="relative flex items-center pointer-events-auto">
        {/* Glowing pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current" />
        </a>
      </div>

    </div>
  );
}
