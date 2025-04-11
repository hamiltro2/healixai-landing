'use client';

import React from 'react';
import Footer from '@/components/Footer';
import PrivacyHeader from './PrivacyHeader';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHeader />
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
                
                <h1 className="text-3xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-cyan-500/50 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <p className="mb-4">
                    At HealixAI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                  <p>
                    We collect information that you provide directly to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create an account or profile</li>
                    <li>Use our AI assistant for medical information</li>
                    <li>Submit questions or feedback</li>
                    <li>Subscribe to our newsletters</li>
                    <li>Contact our support team</li>
                  </ul>
                  <p className="mt-2">
                    This information may include your name, email address, profession, and the content of your interactions with our AI assistant.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process and fulfill your requests</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Develop new features and services</li>
                    <li>Monitor and analyze trends and usage of our platform</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Protect the rights and property of HealixAI and others</li>
                  </ul>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Service providers who perform services on our behalf</li>
                    <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                    <li>Government authorities if required by law or in response to legal process</li>
                  </ul>
                  <p className="mt-2">
                    We may share aggregated or de-identified information, which cannot reasonably be used to identify you, for research, educational, or analytical purposes.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Your Rights and Choices</h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Access, correct, or delete your personal information</li>
                    <li>Object to our processing of your data</li>
                    <li>Request restriction of processing your personal data</li>
                    <li>Request transfer of your personal data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                  <p className="mt-2">
                    To exercise these rights, please contact us using the information provided at the end of this policy.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Children's Privacy</h2>
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we learn we have collected personal information from a child under 18, we will delete that information.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@healixai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">privacy@healixai.com</a>.
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
