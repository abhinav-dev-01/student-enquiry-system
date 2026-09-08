import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071322]/80 backdrop-blur-md text-white border-t border-slate-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-4 bg-white/95 rounded-xl px-3 py-1.5 inline-flex items-center">
              <Logo className="h-7 sm:h-8" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">
              Origami Learning is an academic institute committed to concept-first learning. Guiding students with structured pedagogy in civil services and school & college curricula.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#25ABE2]"></span>
              <span>Academic Session 2026–2027 Admissions Open</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FF383D] mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Institute
                </a>
              </li>
              <li>
                <a href="/#programs" className="hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <Link to="/enquiry" className="text-[#25ABE2] hover:underline font-semibold">
                  Student Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#25ABE2] mb-3.5">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/enquiry?program=Civil%20Service" className="hover:text-white transition-colors">
                  Civil Service Foundation
                </Link>
              </li>
              <li>
                <Link to="/enquiry?program=Tuition" className="hover:text-white transition-colors">
                  School Tuition (Class 8–10)
                </Link>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">
                  1-on-1 Faculty Mentorship
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Academic Director's Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FF383D] mb-3.5">
              Admissions Office
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF383D] shrink-0" />
                <a href="tel:+917012743030" className="hover:text-white transition-colors">
                  +91 70127 43030 (Call)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/919249046898?text=Hello%20Origami%20Learning%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 92490 46898 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#25ABE2] shrink-0" />
                <a href="mailto:admissions@origamilearning.edu" className="hover:text-white transition-colors truncate">
                  admissions@origamilearning.edu
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#25ABE2] shrink-0 mt-1" />
                <span>Cherkkala, Kasaragod</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom divider & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Origami Learning. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Official Student Enquiry Portal</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#25ABE2] hover:text-white transition-colors border border-white/10"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
