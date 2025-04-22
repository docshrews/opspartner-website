//
//  page.js
//  
//
//  Created by Jason on 4/22/25.
//
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const [activePackage, setActivePackage] = useState(null);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automation with a human touch.
              <span className="block mt-2">Built for your business, not big tech.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Streamline ops, tame your tech stack, and build smart systems that just <em>work</em>. Let&apos;s make it all easier — with an AI-powered partner at your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services-packages')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                Let&apos;s Talk
              </button>
              <button 
                onClick={() => scrollToSection('strategy')}
                className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                Book a Free Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center p-6 hover:bg-gray-800 rounded-lg transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Automate</h3>
              <p className="text-gray-300">Workflows, tools, systems — connected. Zapier, Make, n8n, CRMs, onboarding, task routing.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center p-6 hover:bg-gray-800 rounded-lg transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Optimize</h3>
              <p className="text-gray-300">Less noise, more flow. We audit your systems, declutter your stack, and design smarter processes.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center p-6 hover:bg-gray-800 rounded-lg transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3">Empower</h3>
              <p className="text-gray-300">Your team, trained. AI, automation, and ops workshops that teach your crew to fish.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Service Packages */}
      <section id="services-packages" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that matches your needs. From one-off projects to ongoing partnerships.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Custom Automation Projects */}
            <motion.div 
              variants={fadeInUp}
              className={`bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-300 
                ${activePackage === 'automation' ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              onClick={() => setActivePackage('automation')}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔧</span>
                    <h3 className="text-2xl font-bold">Custom Automation Projects</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-6">
                    You&apos;ve got chaos. We&apos;ve got flowcharts.
                  </p>
                  <p className="text-gray-300 mb-4">
                    From customer onboarding to back-office systems — we design and build no-code or low-code automations tailored to your tools.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Zapier, Make, n8n workflows built to your specs</li>
                    <li>Custom CRM integrations and extensions</li>
                    <li>Process automation for documentation, invoicing, onboarding</li>
                    <li>Data syncing between disconnected systems</li>
                  </ul>
                </div>
                <div className="md:text-right mt-6 md:mt-0">
                  <p className="text-2xl font-bold mb-2">Starting at $1,000</p>
                  <p className="text-gray-400 mb-6">Per project, custom scoped</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all">
                    <Link href="/assessment">Get Started</Link>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Ops + AI Strategy */}
            <motion.div 
              variants={fadeInUp}
              id="strategy"
              className={`bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-300 
                ${activePackage === 'strategy' ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              onClick={() => setActivePackage('strategy')}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🧠</span>
                    <h3 className="text-2xl font-bold">Ops + AI Strategy (StreamlineIQ)</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-6">
                    Not sure where to start? Let&apos;s audit your ops.
                  </p>
                  <p className="text-gray-300 mb-4">
                    We review your tech stack, process flow, and team rhythm — then build you a clear roadmap to streamline and scale.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Comprehensive tech stack analysis</li>
                    <li>Process flow mapping and optimization</li>
                    <li>AI integration recommendations</li>
                    <li>Detailed PDF report + 60-minute strategy call</li>
                  </ul>
                </div>
                <div className="md:text-right mt-6 md:mt-0">
                  <p className="text-2xl font-bold mb-2">Flat Rate: $500</p>
                  <p className="text-gray-400 mb-6">Includes report + strategy call</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all">
                    <Link href="/assessment">Book An Audit</Link>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* AI Workflows + Sidekick Setup */}
            <motion.div 
              variants={fadeInUp}
              className={`bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-300 
                ${activePackage === 'ai' ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              onClick={() => setActivePackage('ai')}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🤖</span>
                    <h3 className="text-2xl font-bold">AI Workflows + Sidekick Setup</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-6">
                    AI should feel like a team member, not a black box.
                  </p>
                  <p className="text-gray-300 mb-4">
                    We design workflows powered by GPT, Claude, and other AI tools — including custom prompt libraries and automations that fit your style.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Custom AI agent creation and configuration</li>
                    <li>Tailored prompt libraries for your business context</li>
                    <li>Workflow design integrating AI with your tech stack</li>
                    <li>Training on effective AI collaboration techniques</li>
                  </ul>
                </div>
                <div className="md:text-right mt-6 md:mt-0">
                  <p className="text-2xl font-bold mb-2">From $150/hr</p>
                  <p className="text-gray-400 mb-6">Or scoped per project</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all">
                    <Link href="/assessment">Get Started</Link>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Training & Team Workshops */}
            <motion.div 
              variants={fadeInUp}
              className={`bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-300 
                ${activePackage === 'training' ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              onClick={() => setActivePackage('training')}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🎓</span>
                    <h3 className="text-2xl font-bold">Training & Team Workshops</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-6">
                    Bring your people with you.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Zoom-based training or on-demand sessions to get your team fluent in the tools they actually use — and the AI they&apos;re hearing about.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Tool-specific training (Zapier, Notion, Airtable, etc)</li>
                    <li>AI effectiveness sessions for non-technical teams</li>
                    <li>Custom documentation and process playbooks</li>
                    <li>Recorded sessions for future team members</li>
                  </ul>
                </div>
                <div className="md:text-right mt-6 md:mt-0">
                  <p className="text-2xl font-bold mb-2">From $100/hr</p>
                  <p className="text-gray-400 mb-6">Or $500+ per session</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all">
                    <Link href="/assessment">Book Training</Link>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Retainer Packages */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sidekick Retainer Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some folks don&apos;t want a one-off. They want a partner. Here&apos;s what that looks like:
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Starter Plan */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:bg-gray-700 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-6">$250<span className="text-lg font-normal text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>1 monthly consultation call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>1 system update or tweak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Email support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Quick response troubleshooting</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all">
                <Link href="/assessment">Get Started</Link>
              </button>
            </motion.div>
            
            {/* Growth Plan */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-800 rounded-xl p-8 shadow-xl border-2 border-blue-500 relative z-10 transform md:-translate-y-4"
            >
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-3xl font-bold mb-6">$500<span className="text-lg font-normal text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>2 monthly consultation calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>2 system updates or tweaks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Priority email support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Monthly system health check</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Quarterly strategy review</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all">
                <Link href="/assessment">Choose Growth</Link>
              </button>
            </motion.div>
            
            {/* OpsPartner Plan */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:bg-gray-700 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-2">OpsPartner</h3>
              <p className="text-3xl font-bold mb-6">$1,000+<span className="text-lg font-normal text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Embedded support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Unlimited consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Priority access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Async coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Custom development hours</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all">
                <Link href="/assessment">Request Quote</Link>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Get to Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Ready to stop battling your tech and start focusing on what matters? Let&apos;s talk about how we can make your operations effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all">
                Book a Discovery Call
              </Link>
              <Link href="/assessment" className="border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-all">
                Request a Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}