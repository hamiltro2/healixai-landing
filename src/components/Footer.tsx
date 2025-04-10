'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedAIssist_logo_background-ZQvoDMYRWTkTjivipmykrYwHdcbQEx.png"
                alt="HealixAI Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-lg font-bold text-white">
                Healix<span className="text-cyan-500">AI</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Transforming medical education and research with AI-powered insights.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.linkedin.com/in/ricardo-hamilton-md-6457b43" className="text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-white">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#features" className="text-sm text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-sm text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-white">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} HealixAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-gray-300 hover:text-cyan-500 transition-colors duration-200">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-300 hover:text-cyan-500 transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs text-gray-300 hover:text-cyan-500 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
