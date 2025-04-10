'use client';

import Link from 'next/link';

export default function Specialties() {
  const specialties = [
    { name: "Cardiology", icon: "heart" },
    { name: "Neurology", icon: "brain" },
    { name: "Pulmonology", icon: "lungs" },
    { name: "Pediatrics", icon: "child" },
    { name: "Surgery", icon: "procedures" },
    { name: "Pharmacology", icon: "pills" },
    { name: "Internal Medicine", icon: "stethoscope" },
    { name: "Immunology", icon: "allergies" }
  ];

  return (
    <section id="specialties" className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Medical Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <i className={`fas fa-${specialty.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{specialty.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">And many more specialties covered!</p>
          <Link href="https://app.healixai.com/signup?source=landing" className="btn btn-primary btn-large">
            Explore Your Specialty
          </Link>
        </div>
      </div>
    </section>
  );
}
