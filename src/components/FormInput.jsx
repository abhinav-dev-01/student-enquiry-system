import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = true,
  icon: Icon,
  helperText,
  maxLength,
  autoComplete,
  disabled = false
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between">
        <label 
          htmlFor={id || name} 
          className="text-sm font-semibold text-[#0D1E32] flex items-center gap-1"
        >
          {label}
          {required && <span className="text-[#FF383D] font-bold text-sm leading-none">*</span>}
        </label>
        {helperText && !error && (
          <span className="text-xs text-[#64748B]">{helperText}</span>
        )}
      </div>

      <div className="relative rounded-xl shadow-xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full text-sm rounded-xl bg-white text-[#0D1E32] placeholder:text-[#94A3B8] transition-colors outline-none border disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50 ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } py-3.5 ${
            error
              ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 bg-red-50/20'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1] focus:border-[#25ABE2] focus:ring-2 focus:ring-[#25ABE2]/20'
          }`}
        />

        {error && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#DC2626]">
            <AlertCircle className="w-4 h-4" />
          </div>
        )}
      </div>

      {error && (
        <p id={`${name}-error`} className="text-xs font-medium text-[#DC2626] flex items-center gap-1.5 mt-0.5">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
