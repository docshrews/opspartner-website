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
                        Meet OpsPartner.ai
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Your AI-powered sidekick for smarter, smoother, grind-free ops.
                    </motion.p>
                </div>
                
                {/* Our Story Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Why We Built OpsPartner.ai</h2>
                        <p className="text-gray-300 mb-4">
                            We’ve been in the trenches—spending too much time putting out fires, duct-taping tools together, and scaling chaos instead of clarity.
                        </p>
                        <p className="text-gray-300 mb-4">
                            OpsPartner.ai was born to flip the script. We combine automation, AI, and systems thinking to give founders and teams their time back—without hiring a full ops department.
                        </p>
                        <p className="text-gray-300">
                            It’s not about replacing people. It’s about augmenting humans with tech that acts like a partner, not just a platform.
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
                        To make operations effortless—using AI and automation to streamline your stack, free up your focus, and eliminate grind from the growth equation.
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
                        Built for Founders Who Hate Ops
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI That Gets It",
                                description: "Our tools don’t just automate—they adapt. Think of it like having an ops brain that learns your systems and scales with you.",
                                icon: "🧠"
                            },
                            {
                                title: "Humans in the Loop",
                                description: "We're not just pushing buttons. You get real experts who act like part of your team—because tech alone won’t get you there.",
                                icon: "🤝"
                            },
                            {
                                title: "Custom by Default",
                                description: "We meet you where you are—your stack, your tools, your pace. This isn’t one-size-fits-all automation. It’s ops with intention.",
                                icon: "🛠️"
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
                    <h2 className="text-3xl font-bold mb-
