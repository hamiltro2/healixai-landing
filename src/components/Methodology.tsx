'use client';

export default function Methodology() {
  return (
    <section id="methodology" className="pt-2 pb-8 md:pt-4 md:pb-12 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <div className="relative flex justify-center w-full">
            <img 
              src="/images/healixai-physician.jpg" 
              alt="Physician using HealixAI" 
              className="rounded-2xl shadow-lg"
              style={{ width: '60%', margin: '0 auto' }}
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-stroke-cyan">Our Research Methodology</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-gray-900 p-5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-white">
                <span className="text-cyan-500">Transparent</span> and Evidence-Based
              </h3>
              <p className="text-gray-300 text-sm line-clamp-4">
                HealixAI sources information from peer-reviewed journals, clinical guidelines, and trusted medical databases. 
                Our AI is trained to prioritize high-quality evidence and clearly communicate the strength of evidence behind each recommendation.
              </p>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Evidence <span className="text-purple-500">Hierarchy</span>
              </h3>
              <p className="text-gray-300 text-sm line-clamp-4">
                We follow the established hierarchy of medical evidence, prioritizing systematic reviews, 
                randomized controlled trials, and clinical guidelines from respected medical organizations.
              </p>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Continuous <span className="text-amber-500">Updates</span>
              </h3>
              <p className="text-gray-300 text-sm line-clamp-4">
                Our system is regularly updated with the latest medical research to ensure you always have access to current information.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 relative h-[350px] flex items-center justify-center border border-gray-800">
            {/* Evidence pyramid with enhanced colors */}
            <div className="text-center">
              <div className="w-0 h-0 mx-auto border-l-[150px] border-r-[150px] border-b-[300px] border-l-transparent border-r-transparent border-b-cyan-900/30 relative">
                {/* Level 1 - Systematic Reviews */}
                <div className="absolute top-[40px] left-[-60px] w-[120px] text-center">
                  <p className="text-xs font-semibold text-cyan-500 bg-gray-900/80 py-1 px-2 rounded mx-auto inline-block">
                    Systematic Reviews
                  </p>
                </div>
                {/* Level 2 - RCTs */}
                <div className="absolute top-[100px] left-[-80px] w-[160px] text-center">
                  <p className="text-xs font-semibold text-purple-400 bg-gray-900/80 py-1 px-2 rounded mx-auto inline-block">
                    Randomized Controlled Trials
                  </p>
                </div>
                {/* Level 3 - Cohort Studies */}
                <div className="absolute top-[180px] left-[-100px] w-[200px] text-center">
                  <p className="text-xs font-semibold text-blue-400 bg-gray-900/80 py-1 px-2 rounded mx-auto inline-block">
                    Cohort Studies
                  </p>
                </div>
                {/* Level 4 - Case Reports */}
                <div className="absolute top-[240px] left-[-120px] w-[240px] text-center">
                  <p className="text-xs font-semibold text-amber-400 bg-gray-900/80 py-1 px-2 rounded mx-auto inline-block">
                    Case Reports & Expert Opinion
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">Evidence Hierarchy Pyramid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
