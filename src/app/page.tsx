import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Methodology from '@/components/Methodology';

// Add Font Awesome for icons
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Script 
        src="https://kit.fontawesome.com/3b83e9f9d5.js" 
        crossOrigin="anonymous"
      />
      
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <UseCases />
        <Methodology />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
