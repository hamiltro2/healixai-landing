'use client';

import React from 'react';
import Footer from '@/components/Footer';
import TermsHeader from './TermsHeader';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <>
      <TermsHeader />
      <main>
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
                
                <h1 className="text-3xl font-bold mb-6 text-white text-center">Terms of Service</h1>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-cyan-500/50 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <p className="mb-4">
                    Welcome to HealixAI. These Terms of Service govern your use of our website and services. By accessing or using HealixAI, you agree to be bound by these terms.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information Purpose Only</h2>
                  <p>
                    HealixAI provides evidence-based medical information for educational and informational purposes only. The content provided through our platform is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. No Doctor-Patient Relationship</h2>
                  <p>
                    Using HealixAI does not create a doctor-patient relationship between you and HealixAI or any of its affiliates, employees, or contributors. Our AI-powered platform provides information based on medical research and literature but does not provide personalized medical advice or treatment.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
                  <p>
                    When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your password and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Acceptable Use</h2>
                  <p>
                    You agree not to use HealixAI for any unlawful purpose or in any way that could damage, disable, overburden, or impair our service. You may not attempt to gain unauthorized access to any part of our service, other accounts, or computer systems.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
                  <p>
                    All content, features, and functionality of HealixAI, including but not limited to text, graphics, logos, and software, are owned by HealixAI and are protected by United States and international copyright, trademark, and other intellectual property laws.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Limitation of Liability</h2>
                  <p>
                    HealixAI and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our service.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to Terms</h2>
                  <p>
                    We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated terms on our website. Your continued use of HealixAI after such changes constitutes your acceptance of the new terms.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at <a href="mailto:legal@healixai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">legal@healixai.com</a>.
                  </p>
                  
                  <p className="mt-8 text-sm text-gray-400">
                    Last updated: April 10, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
