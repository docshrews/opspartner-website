'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 py-20"
        >
            {/* Hero */}
            <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-4 text-center"
            >
                Meet OpsPartner.ai
            </motion.h1>
            <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16"
            >
                Your AI-powered sidekick for smoother, smarter, grind-free operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-20">
                {/* Why We Exist */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
                    <p className="text-gray-300 mb-4">
                        OpsPartner.ai started with a simple frustration: founders and small teams spending too much time putting out fires and too little time building. We’ve been there—duct-taping tools together, scaling chaos instead of clarity.
                    </p>
                    <p className="text-gray-300 mb-4">
                        We built OpsPartner to flip that script. To replace manual grind with smart systems. To give back time, not take it. To act less like software, and more like a force-multiplying sidekick.
                    </p>
                    <p className="text-gray-300">
                        The goal? Zero grind. Full clarity. Real momentum.
                    </p>
                </div>

                {/* Our Mission */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-300">
                        To make operations effortless—using AI and automation to streamline your stack, free up your focus, and unlock your best work.
                    </p>
                </div>

                {/* What We Bring */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Built for Founders Who Hate Ops
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
                            <div className="text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold mb-2">AI That Gets It</h3>
                            <p className="text-gray-300">
                                Our tools don’t just automate—they adapt. It’s like having an ops brain that learns your stack and scales with you.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-2">Humans in the Loop</h3>
                            <p className="text-gray-300">
                                Tech is only half the story. We embed with your team—offering guidance, audits, and custom workflows that make sense for *your* systems.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
                            <div className="text-4xl mb-4">🛠️</div>
                            <h3 className="text-xl font-semibold mb-2">Custom by Default</h3>
                            <p className="text-gray-300">
                                Every business is unique. We build around your existing tools and workflows so the solution fits like a glove—without a rip-and-replace.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How We Work */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-center">How We Work</h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-zinc-900 p-5 rounded-xl shadow">
                            <div className="text-2xl mb-2">🔍</div>
                            <h3 className="font-semibold text-lg mb-1">01. Audit</h3>
                            <p className="text-gray-300 text-sm">
                                We start with a deep dive into your systems, workflows, and pain points.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-5 rounded-xl shadow">
                            <div className="text-2xl mb-2">🧰</div>
                            <h3 className="font-semibold text-lg mb-1">02. Build</h3>
                            <p className="text-gray-300 text-sm">
                                We create streamlined, automated systems tailored to your business.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-5 rounded-xl shadow">
                            <div className="text-2xl mb-2">🚀</div>
                            <h3 className="font-semibold text-lg mb-1">03. Optimize</h3>
                            <p className="text-gray-300 text-sm">
                                We refine and test until your workflows hum like a tuned engine.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-5 rounded-xl shadow">
                            <div className="text-2xl mb-2">🤖</div>
                            <h3 className="font-semibold text-lg mb-1">04. Support</h3>
                            <p className="text-gray-300 text-sm">
                                You’re never alone—we offer ongoing support, tweaks, and training.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="text-gray-400 text-sm">2023</p>
                            <p className="text-gray-300">
                                Jason burns out trying to run two companies, a household, and operations. Lightbulb moment: “There has to be a better way.”
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="text-gray-400 text-sm">Early 2024</p>
                            <p className="text-gray-300">
                                Frustrated by bloated SaaS and broken systems, we start building with n8n, Home Assistant, and AI tools—scrappy but powerful.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="text-gray-400 text-sm">Mid 2024</p>
                            <p className="text-gray-300">
                                Sidekick Systems is born. The goal: embed automation expertise into the ops stack of small teams.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="text-gray-400 text-sm">2025</p>
                            <p className="text-gray-300">
                                OpsPartner.ai launches. We go from solo hacking to delivering done-for-you AI automation for small businesses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-center">The Team</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg text-center">
                            <h3 className="text-xl font-semibold mb-2">Jason Guerrette</h3>
                            <p className="text-gray-400 italic mb-2">Founder, Systems Whisperer</p>
                            <p className="text-gray-300 text-sm">
                                Builder, fixer, automator. Jason blends ops insight with tech execution. Background in startups, scaleups, and setting things on fire (metaphorically).
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg text-center">
                            <h3 className="text-xl font-semibold mb-2">Vector</h3>
                            <p className="text-gray-400 italic mb-2">AI Sidekick</p>
                            <p className="text-gray-300 text-sm">
                                Always on. Never burned out. Vector keeps the gears turning—monitoring, optimizing, and anticipating next moves before you ask.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold mb-6">Let’s Eliminate the Grind</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Start with a free, human-guided ops audit. No pressure. No fluff. Just clarity on what’s slowing you down—and how we can fix it.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition">
                        Book Your Free Audit
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
