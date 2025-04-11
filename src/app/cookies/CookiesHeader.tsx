'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';

export default function CookiesHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-[#030712] backdrop-blur supports-[backdrop-filter]:bg-[#030712]/95">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-sm overflow-hidden border border-cyan-500 shadow-sm shadow-cyan-500/50">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedAIssist_logo_background-ZQvoDMYRWTkTjivipmykrYwHdcbQEx.png"
                alt="HealixAI Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
            </div>
            <span className="text-lg font-bold text-white">
              Healix<span className="text-cyan-500">AI</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-sm font-medium text-gray-200 transition-colors hover:text-cyan-500"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-200 transition-colors hover:text-cyan-500"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="https://app.healixai.com/login?source=landing" 
            className="text-sm font-medium text-gray-200 hover:text-cyan-500"
          >
            Log in
          </Link>
          <Button 
            href="https://app.healixai.com/signup?source=landing" 
            variant="primary" 
            size="small"
          >
            Sign up
          </Button>
        </div>
        
        <button
          className="flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#030712]">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/about" 
              className="text-sm font-medium py-2 text-gray-200 hover:text-cyan-500"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium py-2 text-gray-200 hover:text-cyan-500"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="https://app.healixai.com/login?source=landing" 
              className="text-sm font-medium py-2 text-gray-200 hover:text-cyan-500"
              onClick={toggleMobileMenu}
            >
              Log in
            </Link>
            <Button 
              href="https://app.healixai.com/signup?source=landing" 
              variant="primary" 
              size="default"
              className="w-full"
              onClick={toggleMobileMenu}
            >
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
