'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import ContactHeader from './ContactHeader';
import { Send, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.details || data.error || 'Failed to send message';
        console.error('API error details:', data);
        throw new Error(errorMessage);
      }
      
      // Email sent successfully to ricardohamiltonmd@healixai.com
      console.log('Form submitted successfully');
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'There was an error submitting your message. Please try again.';
      setSubmitError(errorMessage);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ContactHeader />
      <main>
        {/* Contact section */}
        <section className="py-16 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-8 mb-12 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg">
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
                
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Contact Us</h1>
                
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Contact Information */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-white">Get in Touch</h2>
                    <p className="text-gray-300 mb-6">
                      Have questions about HealixAI? We&apos;re here to help! Fill out the form or reach out directly.
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="h-5 w-5 text-cyan-500" />
                      <a href="mailto:ricardohamiltonmd@healixai.com" className="text-gray-300 hover:text-cyan-500 transition-colors">
                        ricardohamiltonmd@healixai.com
                      </a>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-3 text-white">Connect with us</h3>
                      <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/ricardo-hamilton-md-6457b43" className="text-gray-300 hover:text-cyan-500 transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <div className="flex-1">
                    {submitSuccess ? (
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="rounded-full bg-cyan-500/20 p-3">
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
                              className="h-6 w-6 text-cyan-500"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Message Sent!</h3>
                        <p className="text-gray-300 mb-4">
                          Thank you for reaching out. We&#39;ll get back to you as soon as possible.
                        </p>
                        <button
                          onClick={() => setSubmitSuccess(false)}
                          className="text-sm font-medium text-cyan-500 hover:text-cyan-400"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                            placeholder="How can we help?"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200 resize-none"
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                        
                        {submitError && (
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                            <h4 className="text-red-400 font-medium mb-1">Error sending message:</h4>
                            <p className="text-red-300 text-sm">{submitError}</p>
                          </div>
                        )}
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-200 ${
                            isSubmitting
                              ? 'bg-cyan-600 cursor-not-allowed'
                              : 'bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-pulse">Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
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
