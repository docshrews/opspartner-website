"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Assessment() {
    return (
        <main className="min-h-screen bg-black text-white py-16 px-6">
            <Header />
            
            <section className="max-w-4xl mx-auto my-12">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Operations Assessment</h1>
                    <p className="text-xl text-gray-300">Answer a few questions to receive your personalized DevOps evaluation</p>
                </motion.div>
                
                <AssessmentForm />
            </section>
            
            <Footer />
        </main>
    );
}

function AssessmentForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        company_size: '',
        industry: '',
        current_challenges: [],
        infrastructure: [],
        deployment_frequency: '',
        name: '',
        email: '',
        phone: '',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            setFormData({
                ...formData,
                [name]: [...formData[name], value]
            });
        } else {
            setFormData({
                ...formData,
                [name]: formData[name].filter(item => item !== value)
            });
        }
    };
    
    const nextStep = () => {
        setStep(step + 1);
    };
    
    const prevStep = () => {
        setStep(step - 1);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - API call would go here
        console.log('Form submitted:', formData);
        // Move to thank you step
        nextStep();
    };
    
    const formSteps = [
        // Step 1: Basic Info
        <motion.div 
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-2xl font-bold mb-6">Tell us about your company</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Company Size</label>
                <select 
                    name="company_size"
                    value={formData.company_size}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                    required
                >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                </select>
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Industry</label>
                <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                    required
                >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            <div className="flex justify-end mt-8">
                <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Next
                </button>
            </div>
        </motion.div>,
        
        // Step 2: Technical Challenges
        <motion.div 
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-2xl font-bold mb-6">What challenges are you facing?</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-4">Select all that apply</label>
                
                {[
                    { value: 'scaling_issues', label: 'Scaling infrastructure with growth' },
                    { value: 'deployment_delays', label: 'Slow deployment processes' },
                    { value: 'monitoring_gaps', label: 'Inadequate monitoring and alerting' },
                    { value: 'security_concerns', label: 'Security vulnerabilities' },
                    { value: 'cost_management', label: 'Cloud cost management' },
                    { value: 'technical_debt', label: 'Technical debt' },
                    { value: 'skill_gaps', label: 'DevOps skill gaps' }
                ].map((challenge) => (
                    <div key={challenge.value} className="mb-3 flex items-center">
                        <input
                            type="checkbox"
                            id={challenge.value}
                            name="current_challenges"
                            value={challenge.value}
                            checked={formData.current_challenges.includes(challenge.value)}
                            onChange={handleCheckboxChange}
                            className="mr-3 h-5 w-5"
                        />
                        <label htmlFor={challenge.value} className="text-gray-300">
                            {challenge.label}
                        </label>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Next
                </button>
            </div>
        </motion.div>,
        
        // Step 3: Infrastructure
        <motion.div 
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-2xl font-bold mb-6">Your Current Infrastructure</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-4">What cloud platforms do you use?</label>
                
                {[
                    { value: 'aws', label: 'Amazon Web Services (AWS)' },
                    { value: 'azure', label: 'Microsoft Azure' },
                    { value: 'gcp', label: 'Google Cloud Platform (GCP)' },
                    { value: 'digitalocean', label: 'DigitalOcean' },
                    { value: 'on_premise', label: 'On-premise infrastructure' },
                    { value: 'hybrid', label: 'Hybrid cloud' }
                ].map((platform) => (
                    <div key={platform.value} className="mb-3 flex items-center">
                        <input
                            type="checkbox"
                            id={platform.value}
                            name="infrastructure"
                            value={platform.value}
                            checked={formData.infrastructure.includes(platform.value)}
                            onChange={handleCheckboxChange}
                            className="mr-3 h-5 w-5"
                        />
                        <label htmlFor={platform.value} className="text-gray-300">
                            {platform.label}
                        </label>
                    </div>
                ))}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">How often do you deploy to production?</label>
                <select 
                    name="deployment_frequency"
                    value={formData.deployment_frequency}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                >
                    <option value="">Select frequency</option>
                    <option value="multiple_daily">Multiple times per day</option>
                    <option value="daily">Once per day</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly or less frequently</option>
                </select>
            </div>
            
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Next
                </button>
            </div>
        </motion.div>,
        
        // Step 4: Contact Information
        <motion.div 
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                    required
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                    required
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Phone Number (optional)</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                />
            </div>
            
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-all"
                >
                    Submit Assessment
                </button>
            </div>
        </motion.div>,
        
        // Step 5: Thank You
        <motion.div 
            key="step5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
        >
            <div className="text-green-400 text-5xl mb-6">✓</div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-8">
                Your assessment has been submitted successfully. Our team will analyze your responses and reach out to you within 1-2 business days with your personalized DevOps evaluation.
            </p>
        </motion.div>
    ];
    
    return (
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    {[1, 2, 3, 4].map((stepNumber) => (
                        <React.Fragment key={stepNumber}>
                            <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    stepNumber <= step 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-gray-700 text-gray-400'
                                }`}
                            >
                                {stepNumber < step ? '✓' : stepNumber}
                            </div>
                            {stepNumber < 4 && (
                                <div 
                                    className={`flex-1 h-1 mx-2 ${
                                        stepNumber < step ? 'bg-blue-600' : 'bg-gray-700'
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            
            <form>
                {formSteps[step - 1]}
            </form>
        </div>
    );
}