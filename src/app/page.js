"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Server room with blue lighting" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI-Powered DevOps Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Transform your operations with intelligent automation and expert guidance.
              Scale confidently while reducing costs and complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all text-center">
                Start Free Assessment
              </Link>
              <Link href="/about" className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-md transition-all text-center">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How OpsPartner.ai Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines AI automation with human expertise to deliver
              operations excellence that scales with your business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Assess",
                description: "We analyze your current infrastructure, workflows, and pain points to identify optimization opportunities.",
                icon: "🔍",
                delay: 0
              },
              {
                title: "Implement",
                description: "Our AI-powered platform and DevOps experts deploy tailored solutions that integrate seamlessly with your tech stack.",
                icon: "🚀",
                delay: 0.2
              },
              {
                title: "Optimize",
                description: "Continuous monitoring and machine learning ensure your operations keep improving as your business evolves.",
                icon: "📈",
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Organizations Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their operations with OpsPartner.ai
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "50% Reduction in Operational Costs",
                description: "Our AI automation eliminates manual tasks and optimizes resource utilization, cutting infrastructure costs significantly.",
                icon: "💰"
              },
              {
                title: "3x Faster Deployment Cycles",
                description: "Streamlined CI/CD pipelines and automated testing accelerate your release cycles without compromising quality.",
                icon: "⚡"
              },
              {
                title: "99.99% Uptime Guarantee",
                description: "Proactive monitoring and self-healing infrastructure ensure maximum reliability for your critical systems.",
                icon: "🛡️"
              },
              {
                title: "Seamless Scalability",
                description: "Dynamic resource allocation and intelligent load balancing help your infrastructure grow with your business.",
                icon: "📊"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from organizations that have transformed their operations with OpsPartner.ai
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: `OpsPartner.ai revolutionized how we manage our cloud infrastructure. We've cut costs by 40% while handling 3x the traffic.`,
                author: "Sarah Chen",
                position: "CTO, TechNova",
                image: "/images/testimonial-1.jpg"
              },
              {
                quote: `The combination of AI automation and expert guidance helped us modernize our legacy systems without disrupting operations.`,
                author: "Marcus Johnson",
                position: "VP of Engineering, DataFlow",
                image: "/images/testimonial-2.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full">
                  <p className="text-xl italic mb-6 flex-grow">{`"${testimonial.quote}"`}</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Take the first step with our free assessment. Get personalized insights and recommendations for your unique infrastructure.
            </p>
            <Link href="/assessment" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-md text-xl transition-all inline-block">
              Start Free Assessment
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}