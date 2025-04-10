'use client';

import Image from 'next/image';

export default function UseCases() {
  // Reorder the cases array to ensure proper positioning
  const cases = [
    {
      title: "Medical Education",
      description: "Students and educators use HealixAI to access the latest research and evidence-based practices, enhancing learning outcomes and clinical knowledge.",
      image: "case-study-1.jpg",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-500",
      hoverShadowColor: "hover:shadow-purple-500/10"
    },
    {
      title: "Clinical Decision Support",
      description: "Practitioners validate treatment approaches and explore alternative options backed by current research and clinical guidelines.",
      image: "case-study-2.jpg",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      hoverBorderColor: "hover:border-emerald-500",
      hoverShadowColor: "hover:shadow-emerald-500/10"
    },
    {
      title: "Healthcare Workers",
      description: "Medical professionals streamline their workflow with AI assistance for research, documentation, and staying current with the latest medical advances.",
      image: "case-study-4.jpg",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      hoverBorderColor: "hover:border-amber-500",
      hoverShadowColor: "hover:shadow-amber-500/10"
    },
    {
      title: "Evidence-Based Knowledge Seekers",
      description: "Anyone seeking physician-created, trusted, evidence-based medical information can access reliable answers to health-related questions.",
      image: "case-study-5.jpg",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      hoverBorderColor: "hover:border-cyan-500",
      hoverShadowColor: "hover:shadow-cyan-500/10"
    },
    {
      title: "Continuing Medical Education",
      description: "Healthcare professionals stay current with medical advances and fulfill continuing education requirements with up-to-date information.",
      image: "case-study-3.jpg",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/30",
      hoverBorderColor: "hover:border-rose-500",
      hoverShadowColor: "hover:shadow-rose-500/10"
    }
  ];

  return (
    <section id="use-cases" className="py-16 bg-gray-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-stroke-cyan">Who Can Benefit from HealixAI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.slice(0, 4).map((item, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${item.borderColor} ${item.bgColor} ${item.hoverBorderColor} transition-all duration-300 ${item.hoverShadowColor} hover:shadow-lg`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
          
          {/* Special HealixAI Logo Card */}
          <div 
            className="rounded-xl overflow-hidden border border-cyan-500/30 bg-gray-900 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg flex flex-col items-center justify-center"
          >
            <div className="p-6 flex flex-col items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedAIssist_logo_background-ZQvoDMYRWTkTjivipmykrYwHdcbQEx.png"
                alt="HealixAI Logo"
                width={80}
                height={80}
                className="rounded-sm mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">
                <span className="text-white">Healix</span><span className="text-cyan-500">AI</span>
              </h3>
              <p className="text-gray-300 text-center text-sm">
                Created by a physician—for physicians and all
              </p>
            </div>
          </div>
          
          {cases.slice(4).map((item, index) => (
            <div 
              key={index + 4} 
              className={`rounded-xl overflow-hidden border ${item.borderColor} ${item.bgColor} ${item.hoverBorderColor} transition-all duration-300 ${item.hoverShadowColor} hover:shadow-lg`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
