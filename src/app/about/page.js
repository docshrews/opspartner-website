"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About OpsPartner.ai
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Revolutionizing DevOps with AI-powered automation and expertise.
                    </motion.p>
                </div>
                
                {/* Our Story Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-gray-300 mb-4">
                            OpsPartner.ai was founded by a team of DevOps veterans who saw a critical gap in how organizations manage their operations infrastructure.
                        </p>
                        <p className="text-gray-300 mb-4">
                            After years of helping companies of all sizes navigate the complex world of cloud operations, we realized that even with amazing tools, teams still struggled with implementation, maintenance, and scaling their infrastructure.
                        </p>
                        <p className="text-gray-300">
                            We built OpsPartner.ai to be the missing link - combining cutting-edge AI with human expertise to deliver operations excellence that grows with your business.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative h-80 md:h-auto rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image 
                            src="/images/team-collaboration.jpg" 
                            alt="OpsPartner team collaboration" 
                            fill 
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Our Mission Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        To democratize operations excellence by making enterprise-grade DevOps accessible to companies of all sizes through the power of AI-assisted automation and expert guidance.
                    </p>
                </motion.div>
                
                {/* Value Proposition */}
                <div className="mb-20">
                    <motion.h2 
                        className="text-3xl font-bold mb-10 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Why Choose OpsPartner.ai
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI-Powered Efficiency",
                                description: "Our AI platform continuously learns from your operations, automating routine tasks and providing intelligent insights for optimization.",
                                icon: "🤖"
                            },
                            {
                                title: "Human Expertise",
                                description: "Get access to seasoned DevOps professionals who understand both the technical and business aspects of your operations.",
                                icon: "👨‍💻"
                            },
                            {
                                title: "Customized Solutions",
                                description: "Every business is unique. Our approach adapts to your specific needs, technologies, and growth trajectory.",
                                icon: "🔧"
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Call to Action */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Take the first step toward operations excellence with our free assessment.
                    </p>
                    <Link href="/assessment" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all">
                        Start Free Assessment
                    </Link>
                </motion.div>
            </section>
            
            <Footer />
        </main>
    );
}