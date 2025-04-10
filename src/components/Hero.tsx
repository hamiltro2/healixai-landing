'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative pt-2 pb-12 md:pt-6 md:pb-20 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
      
      {/* Cyan accent elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo only */}
          <div className="relative w-24 h-24 mb-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedAIssist_logo_background-ZQvoDMYRWTkTjivipmykrYwHdcbQEx.png"
              alt="HealixAI Logo"
              width={96}
              height={96}
              className="rounded-sm"
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="glow-text-subtle">Transform</span> <span className="text-cyan glow-cyan">Healthcare</span> <span className="glow-text-subtle">Research</span> <span className="glow-text-subtle">with</span> <span className="text-cyan glow-cyan">AI-Powered</span> <span className="text-cyan glow-cyan">Evidence-Based</span> <span className="text-cyan glow-cyan">Voice</span> <span className="glow-text-subtle">Insights</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              HealixAI helps medical professionals and students access evidence-based insights and 
              <span className="highlight-cyan"> stay at the forefront of medical knowledge</span>.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button 
              href="https://app.healixai.com/signup?source=landing" 
              variant="primary" 
              size="large"
              className="shadow-glow-cyan px-8 py-3 text-base"
            >
              Start Your Medical AI Voice and Text Experience Now
            </Button>
          </div>
          <div className="flex items-center justify-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
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
                className="h-4 w-4"
              >
                <path d="M22 11.08V12a10 10 0 01-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
          
          {/* Static image display with visual enhancements */}
          <div className="relative mt-6 w-full max-w-md mx-auto">
            {/* Enhanced background glow effect */}
            <div className="absolute -z-10 inset-0 blur-2xl bg-cyan-500/10 rounded-lg"></div>
            
            {/* Static image with animated decorative elements */}
            <div className="relative w-full">
              {/* Animated decorative elements */}
              <div className="absolute -z-10 -top-3 -left-3 w-12 h-12 border border-cyan-500/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -z-10 -bottom-3 -right-3 w-8 h-8 border border-cyan-500/40 rounded-full animate-ping-slow"></div>
              <div className="absolute -z-10 top-1/4 -right-4 w-6 h-6 bg-cyan-500/10 rounded-full animate-pulse"></div>
              <div className="absolute -z-10 bottom-1/3 -left-4 w-5 h-5 bg-cyan-500/15 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image with enhanced border */}
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-cyan-700/20">
                <Image
                  src="/images/HealixAI_Phone.png"
                  alt="HealixAI Mobile App Interface"
                  width={500}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-500/5 pointer-events-none animate-shimmer"></div>
                
                {/* Microphone button with expanding rings - final precise position */}
                <div className="absolute top-[47.5%] left-[36%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                  <div className="relative">
                    {/* Expanding rings */}
                    <div className="absolute inset-0 rounded-full animate-ping-ring" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute inset-0 rounded-full animate-ping-ring" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-0 rounded-full animate-ping-ring" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Smaller microphone button */}
                    <button className="relative w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Chat overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent">
                  {/* User question */}
                  <div className="flex items-start mb-3 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-blue-600 text-xs">You</span>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-2 text-sm text-gray-800 max-w-[85%]">
                      I&apos;ve been feeling more tired lately. How can I naturally boost my energy, Healix?
                    </div>
                  </div>
                  
                  {/* AI response */}
                  <div className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                    <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-white text-[10px]">Healix</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-sm text-gray-800 max-w-[85%] relative">
                      <div className="typing-animation">
                        <span>Based on medical research, here are evidence-based ways to boost energy naturally:</span>
                        <span className="typing-cursor"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Caption with subtle glow animation */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400/80 whitespace-nowrap animate-pulse-subtle">
                AI-Powered Evidenced Based Voice and Text Response Interface
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
