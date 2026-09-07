import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import Logo from '../components/Logo';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm text-center max-w-md w-full">
        
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] border border-[#25ABE2]/20 text-[#25ABE2] flex items-center justify-center">
            <Compass className="w-7 h-7" />
          </div>
        </div>

        <h1 className="text-2xl font-heading font-extrabold text-[#0D1E32] mb-2">Page Not Found</h1>
        
        <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
          The academic page or resource you are looking for does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-6 py-3 rounded-xl font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] transition-all w-full"
        >
          <Home className="w-4 h-4 text-white" />
          <span>Return to Home</span>
        </Link>

      </div>
    </div>
  );
}
