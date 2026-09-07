import React from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

export default function LoadingButton({
  children,
  loading = false,
  loadingText = 'Submitting...',
  icon: Icon = ArrowRight,
  type = 'submit',
  disabled = false,
  className = '',
  onClick,
  variant = 'primary'
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-heading font-bold text-base transition-all duration-200 cursor-pointer select-none rounded-[14px] px-6 py-4 outline-none focus:ring-4 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.99]";

  const variants = {
    primary: "bg-[#FF383D] hover:bg-[#E0262B] text-white shadow-[0_8px_22px_rgba(255,56,61,0.28)] hover:shadow-[0_12px_28px_rgba(255,56,61,0.38)] hover:-translate-y-0.5 focus:ring-[#FF383D]/30",
    blue: "bg-[#25ABE2] hover:bg-[#1694C7] text-white shadow-[0_8px_22px_rgba(37,171,226,0.28)] hover:shadow-[0_12px_28px_rgba(37,171,226,0.38)] hover:-translate-y-0.5 focus:ring-[#25ABE2]/30",
    secondary: "bg-white hover:bg-slate-50 text-[#0D1E32] border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] focus:ring-[#25ABE2]/15"
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2.5">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>{loadingText}</span>
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <span>{children}</span>
          {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />}
        </span>
      )}
    </button>
  );
}
