// Next.js App Router Structure for OpsPartner.ai

// src/app/page.js - Homepage
export default function Home() {
    return (
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Your <span className="text-[#00E599]">Operations Partner</span>, Powered by AI
            </h1>
            <p className="text-xl mb-8">
              We help small businesses automate operations to save hours, not minutes.
              Partner with us to eliminate toil and focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00E599] text-black px-8 py-3 rounded-md font-bold">
                Start Your Free Assessment
              </button>
              <button className="border border-[#00E599] px-8 py-3 rounded-md">
                See How It Works
              </button>
            </div>
          </div>
        </section>
  
        {/* Problem Statement Section */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              Small Business Operations Shouldn't Require Enterprise Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-zinc-700 p-6 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-[#00E599]">Too Many Tools</h3>
                <p>Your business uses 15+ apps that don't talk to each other, creating manual data entry hell.</p>
              </div>
              <div className="border border-zinc-700 p-6 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-[#00E599]">Admin Overload</h3>
                <p>You spend 20+ hours weekly on repetitive tasks instead of growing your business.</p>
              </div>
              <div className="border border-zinc-700 p-6 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-[#00E599]">Tech Complexity</h3>
                <p>You know automation could help, but don't have time to learn complex systems.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Partnership Approach */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The OpsPartner Difference</h2>
            <p className="text-xl mb-8">
              We don't just build and leave. We partner with you to understand your operations,
              implement solutions, and teach your team to maintain them.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Traditional Consultants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✖</span>
                    <span>Build complex systems you can't maintain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✖</span>
                    <span>Charge ongoing fees for simple changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✖</span>
                    <span>One-size-fits-all approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✖</span>
                    <span>Dependency-creating relationship</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">OpsPartner Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00E599] mr-2">✓</span>
                    <span>Build simple, maintainable systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E599] mr-2">✓</span>
                    <span>Teach you how to make your own changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E599] mr-2">✓</span>
                    <span>Customized to your exact workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E599] mr-2">✓</span>
                    <span>Empowerment-focused partnership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* How It Works */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-[#00E599] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Free Operations Assessment</h3>
                  <p>Complete our 10-minute questionnaire to help us understand your business operations, pain points, and existing tools.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-[#00E599] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Customized Solution Design</h3>
                  <p>We'll analyze your needs and design a tailored automation solution with clear ROI and time-saving metrics.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-[#00E599] text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Implementation & Training</h3>
                  <p>We build your automation systems and train your team on maintenance, ensuring you're not dependent on us long-term.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Back Your Time?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with our free operations assessment and discover how much time you could be saving.
            </p>
            <button className="bg-[#00E599] text-black px-8 py-4 rounded-md font-bold text-lg">
              Start Your Free Assessment
            </button>
          </div>
        </section>
      </main>
    );
  }
  
  // src/app/assessment/page.js - Assessment Form
  export default function Assessment() {
    return (
      <main className="min-h-screen bg-black text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Operations Assessment</h1>
          <p className="text-xl mb-12">
            Complete this 10-minute assessment to help us understand your business and identify 
            automation opportunities. We'll analyze your responses and schedule a follow-up call
            to discuss potential solutions.
          </p>
          
          <div className="bg-zinc-900 p-8 rounded-lg">
            {/* Form would go here - implement with React Hook Form */}
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-bold">Business Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-black border border-zinc-700 rounded-md"
                  placeholder="Your business name"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-bold">Industry</label>
                <select className="w-full p-3 bg-black border border-zinc-700 rounded-md">
                  <option>Select your industry</option>
                  <option>Professional Services</option>
                  <option>E-commerce</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-bold">Team Size</label>
                <select className="w-full p-3 bg-black border border-zinc-700 rounded-md">
                  <option>Select team size</option>
                  <option>Solo</option>
                  <option>2-5 employees</option>
                  <option>6-15 employees</option>
                  <option>16-50 employees</option>
                  <option>50+ employees</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-bold">What tools do you currently use? (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Google Workspace</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Microsoft 365</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Slack</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Zoom</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>QuickBooks</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Xero</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>HubSpot</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Salesforce</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-bold">Which of these tasks consume the most time in your business?</label>
                <textarea 
                  className="w-full p-3 bg-black border border-zinc-700 rounded-md h-32"
                  placeholder="Describe your most time-consuming tasks..."
                ></textarea>
              </div>
              
              <div>
                <label className="block mb-2 font-bold">How familiar are you with business automation?</label>
                <select className="w-full p-3 bg-black border border-zinc-700 rounded-md">
                  <option>Select your familiarity level</option>
                  <option>Not familiar at all</option>
                  <option>I've heard of it but never used it</option>
                  <option>I've used some basic automation tools</option>
                  <option>I regularly use automation in my business</option>
                  <option>I'm an automation expert</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-bold">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-black border border-zinc-700 rounded-md"
                  placeholder="Your email address"
                />
              </div>
              
              <button className="w-full bg-[#00E599] text-black p-3 rounded-md font-bold text-lg">
                Submit Assessment
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  // src/app/about/page.js - About Page
  export default function About() {
    return (
      <main className="min-h-screen bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About OpsPartner.ai</h1>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                OpsPartner.ai exists to bring enterprise-grade operational efficiency to small businesses through 
                AI and automation, without the enterprise price tag or complexity. We believe that time is your most
                valuable asset—and we're here to help you reclaim it.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">The Founder</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  {/* Replace with actual image */}
                  <div className="bg-zinc-800 w-full aspect-square rounded-md flex items-center justify-center">
                    <span>Founder Image</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Jason</h3>
                  <p className="mb-4">
                    With over 15 years of experience in enterprise IT operations, including roles at Pfizer,
                    Jason brings enterprise-level operational expertise to small businesses. His background
                    spans datacenter management, networking, cloud infrastructure, and manufacturing IT.
                  </p>
                  <p>
                    After seeing how automation transformed large organizations, Jason founded OpsPartner.ai
                    to make these same powerful tools accessible to small businesses—not just as one-off projects,
                    but as ongoing partnerships focused on sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg mb-6">
                We don't just implement tools—we build partnerships. Our process is designed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#00E599] mr-2 font-bold">→</span>
                  <span>Deeply understand your unique operational challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E599] mr-2 font-bold">→</span>
                  <span>Implement right-sized automation that solves real problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E599] mr-2 font-bold">→</span>
                  <span>Transfer knowledge so you're not dependent on us long-term</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E599] mr-2 font-bold">→</span>
                  <span>Measure success in hours saved, not features added</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }