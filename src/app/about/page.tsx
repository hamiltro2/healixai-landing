'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import AboutHeader from './AboutHeader';

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <main>
        {/* Founder section */}
        <section className="py-16 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-8 mb-12 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg">
                {/* Logo above name */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedAIssist_logo_background-ZQvoDMYRWTkTjivipmykrYwHdcbQEx.png"
                      alt="HealixAI Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center">Ricardo Hamilton, MD</h2>
                <p className="text-lg text-gray-300 italic mb-6 text-center">
                  Board Certified in Internal Medicine and Sports Medicine<br />
                  Proudly serving with The Permanente Medical Group at Kaiser Permanente - Santa Clara
                </p>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-cyan-500/50 rounded-full"></div>
                </div>
                <p className="text-gray-300 mb-4">
                  As a physician, I&apos;ve always been humbled by the trust people place in us—family, friends, patients, and colleagues alike. I often find myself fielding important questions about health and wellness, and I&apos;m grateful to be in a position to provide clarity, care, and evidence-based guidance.
                </p>
                <p className="text-gray-300 mb-4">
                  However, like many of my fellow physicians, I&apos;m not always available. When I can&apos;t answer a call or text, I often hear that someone &quot;asked Dr. Google&quot; instead—often with hesitation, and understandably so.
                </p>
                <p className="text-gray-300 mb-4">
                  That&apos;s why I created HealixAI—a thoughtfully designed, physician-led platform that bridges the power of AI with the integrity of evidence-based medicine. HealixAI is a fine-tuned medical assistant that references research journal articles and clinical knowledge to help answer complex health questions when a trusted physician may not be immediately accessible.
                </p>
                <p className="text-gray-300 mb-4">
                  My goal with HealixAI is to empower patients and providers alike—to make trustworthy information more available, and to support the practice of medicine with intelligence that enhances, rather than replaces, human care.
                </p>
                <p className="text-gray-300 mb-4">
                  AI is becoming an integral part of our society and healthcare system. I believe we are called not just to accept this shift, but to shape it with compassion, responsibility, and wisdom—so that we can continue to provide the best possible care, even in a rapidly changing world.
                </p>
                <p className="text-gray-300 mb-6">
                  Let&apos;s move forward—together—with AI as a partner in discovery and healing.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="mailto:ricardohamiltonmd@healixai.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    ricardohamiltonmd@healixai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-stroke-cyan">Our Mission</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-800/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-purple-500/10 hover:shadow-lg">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-purple-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Empowering Healthcare</h3>
                  <p className="text-gray-300">
                    To create a platform that enhances the practice of medicine by making evidence-based information more accessible to both patients and providers.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-cyan-500"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Bridging Technology & Medicine</h3>
                  <p className="text-gray-300">
                    To responsibly integrate AI into healthcare, ensuring it serves as a tool that enhances human care rather than replacing the physician-patient relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-stroke-cyan">Join Us on This Journey</h2>
              <p className="text-gray-300 mb-8">
                Experience how HealixAI is transforming access to evidence-based medical information and enhancing healthcare for all.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
