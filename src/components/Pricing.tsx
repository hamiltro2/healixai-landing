'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "Basic Pack",
      price: "$15",
      features: [
        "50 AI Credits",
        "Full Research Access",
        "Save & Organize Findings",
        "Email Support"
      ],
      isPopular: false
    },
    {
      name: "Pro Pack",
      price: "$60",
      features: [
        "250 AI Credits",
        "Full Research Access",
        "Save & Organize Findings",
        "Priority Support",
        "Export Capabilities"
      ],
      isPopular: true
    },
    {
      name: "Ultra Pack",
      price: "$200",
      features: [
        "1000 AI Credits",
        "Full Research Access",
        "Save & Organize Findings",
        "Priority Support",
        "Advanced Export Options",
        "Team Sharing Features"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow relative ${
                plan.isPopular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-foreground">{plan.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-border">
                <Link 
                  href="https://app.healixai.com/signup?source=landing" 
                  className={`btn w-full py-2 ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>Educational institutions: Contact us for special pricing.</p>
        </div>
      </div>
    </section>
  );
}
