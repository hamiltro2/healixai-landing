'use client';

import React from 'react';
import Footer from '@/components/Footer';
import CookiesHeader from './CookiesHeader';
import Image from 'next/image';

export default function CookiesPage() {
  return (
    <>
      <CookiesHeader />
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
                
                <h1 className="text-3xl font-bold mb-6 text-white text-center">Cookie Policy</h1>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-cyan-500/50 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <p className="mb-4">
                    This Cookie Policy explains how HealixAI uses cookies and similar technologies to recognize you when you visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and provide reporting information.
                  </p>
                  <p className="mt-2">
                    Cookies set by the website owner (in this case, HealixAI) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Why We Use Cookies</h2>
                  <p>
                    We use cookies for several reasons. Some cookies are required for technical reasons for our website and services to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties may also serve cookies through our website for advertising, analytics, and other purposes.
                  </p>
                  <p className="mt-2">
                    Specifically, we use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><span className="font-medium text-white">Authentication and Security:</span> To log you in, maintain your session, and help protect your account from unauthorized access. These cookies are essential for providing you with a secure and personalized experience.</li>
                    <li><span className="font-medium text-white">Preferences:</span> To remember information about your browser and preferences, such as your preferred language or region.</li>
                    <li><span className="font-medium text-white">Analytics:</span> To help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                    <li><span className="font-medium text-white">Service Improvement:</span> To understand user behavior and improve our platform, content, and services.</li>
                  </ul>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-white">Essential Cookies</h3>
                      <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Without these cookies, services you have asked for, like secure login, would not be possible.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-white">Preference Cookies</h3>
                      <p>These cookies allow our website to remember choices you make when you use our website, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit our website.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-white">Analytics Cookies</h3>
                      <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. How to Control Cookies</h2>
                  <p>
                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information.
                  </p>
                  <p className="mt-2">
                    In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">http://www.youronlinechoices.com</a>.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Cookie Preferences</h2>
                  <p>
                    When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your cookie preferences at any time by clicking on the &quot;Cookie Preferences&quot; link in the footer of our website.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Updates to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies or other technologies, please contact us at <a href="mailto:info@healixai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">info@healixai.com</a>.
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
