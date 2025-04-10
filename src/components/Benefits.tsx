'use client';

import { Clock, CheckCircle, User, GraduationCap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Save Hours of Research Time",
      description: "AI-powered search across trusted medical sources delivers answers in seconds, not hours.",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      hoverBorderColor: "hover:border-amber-500",
      hoverShadowColor: "hover:shadow-amber-500/10"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      title: "Evidence-Based Answers",
      description: "Every response is backed by peer-reviewed research and clinical guidelines.",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      hoverBorderColor: "hover:border-emerald-500",
      hoverShadowColor: "hover:shadow-emerald-500/10"
    },
    {
      icon: <User className="h-6 w-6 text-purple-500" />,
      title: "Specialty-Specific Knowledge",
      description: "Tailored information for your medical specialty and practice area.",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-500",
      hoverShadowColor: "hover:shadow-purple-500/10"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-cyan-500" />,
      title: "Continuous Learning",
      description: "Stay updated with the latest medical advances and research findings.",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      hoverBorderColor: "hover:border-cyan-500",
      hoverShadowColor: "hover:shadow-cyan-500/10"
    }
  ];

  return (
    <section id="benefits" className="py-8 bg-gray-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-stroke-cyan">HealixAI Key Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 rounded-lg p-6 border ${benefit.borderColor} ${benefit.hoverBorderColor} hover:shadow-md ${benefit.hoverShadowColor} transition-all h-full flex flex-col`}
            >
              <div className={`w-12 h-12 ${benefit.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300 text-sm flex-grow line-clamp-3">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
