'use client';

import React from 'react';
import Button from './Button';

export default function CTA() {
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/50 p-6 shadow-lg md:p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:100px_100px] [mask-image:radial-gradient(white,transparent_70%)]"></div>
          
          <div className="relative flex flex-col items-center justify-center space-y-4">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-white text-stroke-cyan">Transform Your Medical Practice with</span> <span className="text-cyan-500">HealixAI</span>
              </h2>
              <h3 className="text-xl font-semibold mt-6 text-cyan-600">Fellow Healthcare professionals, Let&#39;s Connect</h3>
            </div>
            
            <div className="mx-auto max-w-[700px] text-left">
              <p className="text-muted-foreground md:text-lg mt-4">
                HealixAI was created by a physician—for physicians and all. We understand the unique demands of medical practice and built this platform to support your workflow, not disrupt it. If you&#39;re curious about how AI can enhance your practice, we&#39;d love to have a conversation.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-xl mb-4 text-cyan-500">With HealixAI, your practice can:</h4>
                <ul className="list-disc pl-6 text-muted-foreground md:text-lg space-y-2">
                  <li>Improve patient communication by answering questions before and after clinic visits</li>
                  <li>Integrate with your scheduling software to seamlessly book appointments</li>
                  <li>Implement an AI-powered scribe to generate accurate and organized SOAP notes from office visits</li>
                  <li>Explore additional custom AI solutions tailored to your workflow</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground md:text-lg mt-6">
                Let&#39;s discuss how HealixAI can help make your practice more efficient, without compromising the quality of care. We&#39;re excited to connect with fellow physicians who are ready to innovate.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                variant="primary"
                size="large" 
                className="px-4 sm:px-8 py-3 text-sm sm:text-base text-center"
                href="/contact"
              >
                <span className="block sm:hidden">Contact us</span>
                <span className="hidden sm:block">Contact us to learn more and start the conversation</span>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
