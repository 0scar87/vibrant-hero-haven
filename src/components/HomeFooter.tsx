
import React from 'react';
import { Link } from 'react-router-dom';

export function HomeFooter() {
  return (
    <footer className="py-6 px-6 md:px-16 lg:px-24 text-center text-sm text-white/60">
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
        <span>Metacophen Inc © 2025</span>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className="hover:text-white transition-colors">Privacy & Legal</Link>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
        <span className="hidden sm:inline">|</span>
        <Link to="#" className="hover:text-white transition-colors">Visit us on X</Link>
      </div>
    </footer>
  );
}
