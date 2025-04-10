'use client';

import React from 'react';
import { 
  Brain, 
  ClipboardList, 
  Search, 
  BookOpen, 
  FileText, 
  Share2 
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="group rounded-lg border border-gray-800 bg-gray-950/50 p-6 transition-all hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-cyan-500 group-hover:bg-cyan-500/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Evidence-Based Insights",
      description: "Get answers backed by the latest medical research, clinical trials, and peer-reviewed publications."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Instant Research Assistant",
      description: "Save hours of research time with AI-powered search that finds and synthesizes relevant medical information."
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Clinical Decision Support",
      description: "Access treatment guidelines, differential diagnoses, and clinical pearls to enhance your decision-making."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Medical Education",
      description: "Enhance your learning with comprehensive explanations of complex medical concepts and pathophysiology."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Visual Data Representation",
      description: "Understand complex medical data through interactive charts, graphs, and visual summaries."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your medical queries and patient information are protected with enterprise-grade security and encryption."
    }
  ];

  return (
    <section id="features" className="py-8 md:py-12 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-stroke-cyan">
            Advanced <span className="text-cyan glow-cyan">AI Voice</span> Medical Intelligence
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-xl">
            HealixAI combines cutting-edge AI with trusted medical resources to provide you with the most accurate and relevant information.
          </p>
        </div>
        <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
