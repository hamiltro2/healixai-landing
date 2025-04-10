'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import PricingHeader from './PricingHeader';

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <main>
        {/* Pricing section */}
        <section className="py-16 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-8 mb-12 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg">
                {/* Logo above title */}
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
                
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Pricing That Reflects Our Purpose</h1>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-cyan-500/50 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <p>
                    At HealixAI, our vision is simple: to make trusted, intelligent medical information accessible to everyone—anytime, anywhere. As physicians, we understand the importance of reliable answers and support, especially when your doctor isn&apos;t immediately available. That&apos;s why we created HealixAI: to be your evidence-based, physician-designed AI assistant.
                  </p>
                  
                  <p>
                    We&apos;d love to make Healix completely free for all. That&apos;s our heart. But to keep HealixAI running smoothly, securely, and responsibly—with ongoing updates, medical journal integration, and infrastructure that protects your data—we do incur real costs.
                  </p>
                  
                  <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-6 my-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">Here&apos;s Our Promise:</h2>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>No monthly fees</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>No subscriptions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Just a simple, transparent pay-as-you-go system</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-4 text-white">How It Works:</h2>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className="h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-cyan-500 text-xs font-bold">1</span>
                        </div>
                      </div>
                      <span>HealixAI is free to use with limited daily access</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className="h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-cyan-500 text-xs font-bold">2</span>
                        </div>
                      </div>
                      <span>If you need more frequent or in-depth support, you can purchase credits based on usage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className="h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-cyan-500 text-xs font-bold">3</span>
                        </div>
                      </div>
                      <span>Only pay for what you use—nothing more</span>
                    </li>
                  </ul>
                  
                  <p className="mt-6">
                    This credit-based model helps us keep HealixAI affordable for everyone, while supporting continued innovation, security, and accuracy.
                  </p>
                  
                  <p className="mt-6">
                    We&apos;re here to empower you—patients, caregivers, and physicians alike—with a reliable partner in health. Thank you for being part of the journey.
                  </p>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                  Ready to experience HealixAI?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join healthcare professionals who are already using HealixAI to transform their practice with AI-powered, evidence-based insights.
                </p>
                <Button 
                  href="https://app.healixai.com/signup?source=landing" 
                  variant="primary" 
                  size="large"
                  className="shadow-glow-cyan"
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
