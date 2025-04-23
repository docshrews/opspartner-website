"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
                    <p className="text-xl text-gray-300 mb-6">
                        Let&apos;s figure out where your business stands and how we can supercharge your operations.
                    </p>
                    <p className="text-gray-400">
                        Complete this quick assessment to get personalized insights and next steps.
                    </p>
                </motion.div>
                
                <AssessmentForm />
            </section>
            
            <Footer />
        </main>
    );
}

function AssessmentForm() {
    const [step, setStep] = useState(1);
    const totalSteps = 6;
    
    const [formData, setFormData] = useState({
        // Step 1: Business Profile
        business_stage: '',
        company_size: '',
        industry: '',
        custom_industry: '',
        role: '',
        top_priority: '',
        
        // Step 2: Online Presence
        website: '',
        social_media: {
            instagram: { handle: '', url: '' },
            facebook: { handle: '', url: '' },
            linkedin: { handle: '', url: '' },
            tiktok: { handle: '', url: '' },
            youtube: { handle: '', url: '' },
            other: { platform: '', handle: '', url: '' }
        },
        
        // Step 3: Bottlenecks & Pain Points
        bottlenecks: [],
        custom_bottleneck: '',
        
        // Step 4: Tools & Systems
        tools: [],
        custom_tools: '',
        
        // Step 5: Readiness & Approach
        comfort_level: '',
        has_documentation: '',
        approach_preference: '',
        
        // Step 6: Contact Information
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        consent: false
    });
    
    // Form validation
    const [errors, setErrors] = useState({});
    
    const validateStep = (stepNumber) => {
        let tempErrors = {};
        let isValid = true;
        
        // Validate based on current step
        switch(stepNumber) {
            case 1:
                if (!formData.business_stage) {
                    tempErrors.business_stage = "Please select your business stage";
                    isValid = false;
                }
                if (!formData.company_size) {
                    tempErrors.company_size = "Please select your company size";
                    isValid = false;
                }
                if (!formData.industry) {
                    tempErrors.industry = "Please select your industry";
                    isValid = false;
                }
                if (formData.industry === 'other' && !formData.custom_industry) {
                    tempErrors.custom_industry = "Please specify your industry";
                    isValid = false;
                }
                if (!formData.role) {
                    tempErrors.role = "Please select your role";
                    isValid = false;
                }
                if (!formData.top_priority) {
                    tempErrors.top_priority = "Please select your top priority";
                    isValid = false;
                }
                break;
                
            case 2:
                if (!formData.website) {
                    tempErrors.website = "Please enter your website URL";
                    isValid = false;
                } else if (!isValidURL(formData.website)) {
                    tempErrors.website = "Please enter a valid URL (https://example.com)";
                    isValid = false;
                }
                // Social media validation is optional
                break;
                
            case 3:
                if (formData.bottlenecks.length === 0) {
                    tempErrors.bottlenecks = "Please select at least one bottleneck";
                    isValid = false;
                }
                if (formData.bottlenecks.includes('other') && !formData.custom_bottleneck) {
                    tempErrors.custom_bottleneck = "Please specify your bottleneck";
                    isValid = false;
                }
                break;
                
            case 4:
                // Tools are optional, but validate custom tools if selected
                if (formData.tools.includes('other') && !formData.custom_tools) {
                    tempErrors.custom_tools = "Please specify your tools";
                    isValid = false;
                }
                break;
                
            case 5:
                if (!formData.comfort_level) {
                    tempErrors.comfort_level = "Please select your comfort level";
                    isValid = false;
                }
                if (!formData.has_documentation) {
                    tempErrors.has_documentation = "Please select an option";
                    isValid = false;
                }
                if (!formData.approach_preference) {
                    tempErrors.approach_preference = "Please select your preference";
                    isValid = false;
                }
                break;
                
            case 6:
                if (!formData.first_name) {
                    tempErrors.first_name = "First name is required";
                    isValid = false;
                }
                if (!formData.last_name) {
                    tempErrors.last_name = "Last name is required";
                    isValid = false;
                }
                if (!formData.email) {
                    tempErrors.email = "Email is required";
                    isValid = false;
                } else if (!isValidEmail(formData.email)) {
                    tempErrors.email = "Please enter a valid email address";
                    isValid = false;
                }
                if (!formData.consent) {
                    tempErrors.consent = "You must consent to proceed";
                    isValid = false;
                }
                break;
        }
        
        setErrors(tempErrors);
        return isValid;
    };
    
    // Helper validation functions
    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    
    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox' && name === 'consent') {
            setFormData({
                ...formData,
                [name]: checked
            });
            return;
        }
        
        // Handle nested social media fields
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [child]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        
        // Clear error for this field if it exists
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };
    
    const handleSocialMediaChange = (platform, field, value) => {
        setFormData({
            ...formData,
            social_media: {
                ...formData.social_media,
                [platform]: {
                    ...formData.social_media[platform],
                    [field]: value
                }
            }
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
        
        // Clear error for this field if it exists
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };
    
    const nextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
            // Scroll to top of form
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const prevStep = () => {
        setStep(step - 1);
        // Scroll to top of form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateStep(step)) {
            return;
        }
        
        // In a real implementation, you would send this data to your backend
        console.log('Form submitted:', formData);
        
        // Convert form data to JSON format - this will be useful for future AI agent integration
        const formDataJson = JSON.stringify(formData, null, 2);
        console.log('JSON format:', formDataJson);
        
        // API call would go here
        // Example:
        // fetch('/api/submit-assessment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: formDataJson,
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     setStep(step + 1);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     // Handle error
        // });
        
        const handleSubmit = async (e) => {
            e.preventDefault();
          
            if (!validateStep(step)) return;
          
            const payload = {
              ...formData,
              bottlenecks: formData.bottlenecks.join(', '),
              tools: formData.tools.join(', ')
            };
          
            try {
              const response = await fetch('/api/submit-assessment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              });
          
              if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
              }
          
              const result = await response.json();
              console.log('Airtable Response:', result);
              setStep(step + 1);
            } catch (err) {
              console.error('Submit Error:', err);
              alert('Something went wrong submitting your assessment. Please try again later.');
            }
          };
          

        // For now, just move to the thank you step
        setStep(step + 1);
    };
    
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };
    
    const renderStepIndicator = () => {
        return (
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => (
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
                            {stepNumber < totalSteps && (
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
        );
    };
    
    const formSteps = [
        // Step 1: Business Profile
        <motion.div 
            key="step1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Business Profile</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">What best describes where you are right now? <span className="text-red-500">*</span></label>
                <select 
                    name="business_stage"
                    value={formData.business_stage}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.business_stage ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                >
                    <option value="">Select your business stage</option>
                    <option value="just_starting">Just starting – no website or systems yet</option>
                    <option value="planning">Planning – business idea or offer is clear, but not operating yet</option>
                    <option value="open_for_business">Open for business – I have a few clients/customers</option>
                    <option value="online_operating">Online & operating – website, services, or store is live</option>
                    <option value="actively_growing">Actively growing – clients, tools, and processes are already in motion</option>
                </select>
                {errors.business_stage && <p className="text-red-500 text-sm mt-1">{errors.business_stage}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Company Size <span className="text-red-500">*</span></label>
                <select 
                    name="company_size"
                    value={formData.company_size}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.company_size ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                >
                    <option value="">Select company size</option>
                    <option value="solo">Solo founder/freelancer</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-10">6-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201+">201+ employees</option>
                </select>
                {errors.company_size && <p className="text-red-500 text-sm mt-1">{errors.company_size}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Industry <span className="text-red-500">*</span></label>
                <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.industry ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white mb-2`}
                    required
                >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="creative">Creative/Design</option>
                    <option value="marketing">Marketing/Advertising</option>
                    <option value="professional_services">Professional Services</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="other">Other</option>
                </select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                
                {formData.industry === 'other' && (
                    <div>
                        <input
                            type="text"
                            name="custom_industry"
                            value={formData.custom_industry}
                            onChange={handleInputChange}
                            placeholder="Please specify your industry"
                            className={`w-full bg-gray-800 border ${errors.custom_industry ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white mt-2`}
                        />
                        {errors.custom_industry && <p className="text-red-500 text-sm mt-1">{errors.custom_industry}</p>}
                    </div>
                )}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">What is your role? <span className="text-red-500">*</span></label>
                <select 
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.role ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                >
                    <option value="">Select your role</option>
                    <option value="founder">Founder/CEO</option>
                    <option value="ops_admin">Operations/Admin</option>
                    <option value="technical_lead">Technical Lead/CTO</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">What is your top priority right now? <span className="text-red-500">*</span></label>
                <select 
                    name="top_priority"
                    value={formData.top_priority}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.top_priority ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                >
                    <option value="">Select your top priority</option>
                    <option value="growth">Growing the business</option>
                    <option value="reduce_manual">Reducing manual work</option>
                    <option value="improve_client">Improving client experience</option>
                    <option value="team_efficiency">Team efficiency/communication</option>
                    <option value="cost_reduction">Cost reduction</option>
                    <option value="scaling">Scaling operations</option>
                </select>
                {errors.top_priority && <p className="text-red-500 text-sm mt-1">{errors.top_priority}</p>}
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
        
        // Step 2: Online Presence
        <motion.div 
            key="step2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Online Presence</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">What is your main website or landing page? <span className="text-red-500">*</span></label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className={`w-full bg-gray-800 border ${errors.website ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                />
                {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-4">Social Media Profiles (Optional)</label>
                <p className="text-sm text-gray-400 mb-4">Providing your social media information helps us understand your brand presence better.</p>
                
                <div className="space-y-4">
                    {/* Instagram */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Instagram Handle</label>
                            <input
                                type="text"
                                value={formData.social_media.instagram.handle}
                                onChange={(e) => handleSocialMediaChange('instagram', 'handle', e.target.value)}
                                placeholder="@username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Instagram URL</label>
                            <input
                                type="url"
                                value={formData.social_media.instagram.url}
                                onChange={(e) => handleSocialMediaChange('instagram', 'url', e.target.value)}
                                placeholder="https://instagram.com/username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                    
                    {/* Facebook */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Facebook Page Name</label>
                            <input
                                type="text"
                                value={formData.social_media.facebook.handle}
                                onChange={(e) => handleSocialMediaChange('facebook', 'handle', e.target.value)}
                                placeholder="Page name"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Facebook URL</label>
                            <input
                                type="url"
                                value={formData.social_media.facebook.url}
                                onChange={(e) => handleSocialMediaChange('facebook', 'url', e.target.value)}
                                placeholder="https://facebook.com/pagename"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                    
                    {/* LinkedIn */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">LinkedIn Profile/Page</label>
                            <input
                                type="text"
                                value={formData.social_media.linkedin.handle}
                                onChange={(e) => handleSocialMediaChange('linkedin', 'handle', e.target.value)}
                                placeholder="Profile or page name"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">LinkedIn URL</label>
                            <input
                                type="url"
                                value={formData.social_media.linkedin.url}
                                onChange={(e) => handleSocialMediaChange('linkedin', 'url', e.target.value)}
                                placeholder="https://linkedin.com/in/username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                    
                    {/* TikTok */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">TikTok Handle</label>
                            <input
                                type="text"
                                value={formData.social_media.tiktok.handle}
                                onChange={(e) => handleSocialMediaChange('tiktok', 'handle', e.target.value)}
                                placeholder="@username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">TikTok URL</label>
                            <input
                                type="url"
                                value={formData.social_media.tiktok.url}
                                onChange={(e) => handleSocialMediaChange('tiktok', 'url', e.target.value)}
                                placeholder="https://tiktok.com/@username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                    
                    {/* YouTube */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">YouTube Channel Name</label>
                            <input
                                type="text"
                                value={formData.social_media.youtube.handle}
                                onChange={(e) => handleSocialMediaChange('youtube', 'handle', e.target.value)}
                                placeholder="Channel name"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">YouTube URL</label>
                            <input
                                type="url"
                                value={formData.social_media.youtube.url}
                                onChange={(e) => handleSocialMediaChange('youtube', 'url', e.target.value)}
                                placeholder="https://youtube.com/c/channelname"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                    
                    {/* Other */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Other Platform</label>
                            <input
                                type="text"
                                value={formData.social_media.other.platform}
                                onChange={(e) => handleSocialMediaChange('other', 'platform', e.target.value)}
                                placeholder="Platform name"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">Handle</label>
                            <input
                                type="text"
                                value={formData.social_media.other.handle}
                                onChange={(e) => handleSocialMediaChange('other', 'handle', e.target.value)}
                                placeholder="Username/handle"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-1">URL</label>
                            <input
                                type="url"
                                value={formData.social_media.other.url}
                                onChange={(e) => handleSocialMediaChange('other', 'url', e.target.value)}
                                placeholder="https://example.com/username"
                                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white"
                            />
                        </div>
                    </div>
                </div>
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
        
        // Step 3: Bottlenecks & Pain Points
        <motion.div 
            key="step3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Bottlenecks & Pain Points</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-4">What are your biggest bottlenecks? (Select all that apply) <span className="text-red-500">*</span></label>
                
                {errors.bottlenecks && <p className="text-red-500 text-sm mb-3">{errors.bottlenecks}</p>}
                
                {[
                    { value: 'manual_tasks', label: 'Too many manual tasks' },
                    { value: 'things_fall_through', label: 'Things fall through the cracks' },
                    { value: 'not_enough_time', label: 'Not enough time in the day' },
                    { value: 'inconsistent_processes', label: 'Inconsistent processes' },
                    { value: 'client_onboarding', label: 'Client onboarding takes too long' },
                    { value: 'tool_overwhelm', label: 'Too many tools that don\'t talk to each other' },
                    { value: 'communication_gaps', label: 'Communication gaps between teams/tools' },
                    { value: 'data_scattered', label: 'Data scattered across multiple platforms' }
                ].map((bottleneck) => (
                    <div key={bottleneck.value} className="mb-3 flex items-center">
                        <input
                            type="checkbox"
                            id={bottleneck.value}
                            name="bottlenecks"
                            value={bottleneck.value}
                            checked={formData.bottlenecks.includes(bottleneck.value)}
                            onChange={handleCheckboxChange}
                            className="mr-3 h-5 w-5"
                        />
                        <label htmlFor={bottleneck.value} className="text-gray-300">
                            {bottleneck.label}
                        </label>
                    </div>
                ))}
                
                <div className="mt-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="other_bottleneck"
                            name="bottlenecks"
                            value="other"
                            checked={formData.bottlenecks.includes('other')}
                            onChange={handleCheckboxChange}
                            className="mr-3 h-5 w-5"
                        />
                        <label htmlFor="other_bottleneck" className="text-gray-300">
                            Other
                        </label>
                    </div>
                    
                    {formData.bottlenecks.includes('other') && (
                        <div className="mt-2">
                            <input
                                type="text"
                                name="custom_bottleneck"
                                value={formData.custom_bottleneck}
                                onChange={handleInputChange}
                                placeholder="Please specify"
                                className={`w-full bg-gray-800 border ${errors.custom_bottleneck ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                            />
                            {errors.custom_bottleneck && <p className="text-red-500 text-sm mt-1">{errors.custom_bottleneck}</p>}
                        </div>
                    )}
                </div>
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
        
        // Step 4: Tools & Systems
        <motion.div 
            key="step4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Tools & Systems</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-4">What platforms/tools do you currently use? (Select all that apply)</label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        { value: 'airtable', label: 'Airtable' },
                        { value: 'make', label: 'Make (Integromat)' },
                        { value: 'zapier', label: 'Zapier' },
                        { value: 'n8n', label: 'n8n' },
                        { value: 'slack', label: 'Slack' },
                        { value: 'clickup', label: 'ClickUp' },
                        { value: 'asana', label: 'Asana' },
                        { value: 'trello', label: 'Trello' },
                        { value: 'notion', label: 'Notion' },
                        { value: 'google_workspace', label: 'Google Workspace' },
                        { value: 'microsoft_365', label: 'Microsoft 365' },
                        { value: 'shopify', label: 'Shopify' },
                        { value: 'wordpress', label: 'WordPress' },
                        { value: 'wix', label: 'Wix' },
                        { value: 'webflow', label: 'Webflow' },
                        { value: 'mailchimp', label: 'Mailchimp' },
                        { value: 'convertkit', label: 'ConvertKit' },
                        { value: 'salesforce', label: 'Salesforce' },
                        { value: 'hubspot', label: 'HubSpot' },
                        { value: 'pipedrive', label: 'Pipedrive' }
                    ].map((tool) => (
                        <div key={tool.value} className="flex items-center">
                            <input
                                type="checkbox"
                                id={tool.value}
                                name="tools"
                                value={tool.value}
                                checked={formData.tools.includes(tool.value)}
                                onChange={handleCheckboxChange}
                                className="mr-3 h-5 w-5"
                            />
                            <label htmlFor={tool.value} className="text-gray-300">
                                {tool.label}
                            </label>
                        </div>
                    ))}
                </div>
                
                <div className="mt-4">
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="other_tools"
                            name="tools"
                            value="other"
                            checked={formData.tools.includes('other')}
                            onChange={handleCheckboxChange}
                            className="mr-3 h-5 w-5"
                        />
                        <label htmlFor="other_tools" className="text-gray-300">
                            Other tools
                        </label>
                    </div>
                    
                    {formData.tools.includes('other') && (
                        <div>
                            <input
                                type="text"
                                name="custom_tools"
                                value={formData.custom_tools}
                                onChange={handleInputChange}
                                placeholder="Please list other tools you use (comma separated)"
                                className={`w-full bg-gray-800 border ${errors.custom_tools ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                            />
                            {errors.custom_tools && <p className="text-red-500 text-sm mt-1">{errors.custom_tools}</p>}
                        </div>
                    )}
                </div>
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
        
        // Step 5: Readiness & Approach
        <motion.div 
            key="step5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Readiness & Approach</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">What is your comfort level with automation tools? <span className="text-red-500">*</span></label>
                {errors.comfort_level && <p className="text-red-500 text-sm mb-2">{errors.comfort_level}</p>}
                <div className="flex flex-col space-y-3">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="comfort_level"
                            value="newbie"
                            checked={formData.comfort_level === 'newbie'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Newbie - I know they exist but haven&apos;t really used them</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="comfort_level"
                            value="comfortable"
                            checked={formData.comfort_level === 'comfortable'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Comfortable - I&apos;ve set up some basic automations</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="comfort_level"
                            value="power_user"
                            checked={formData.comfort_level === 'power_user'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Power User - I regularly build and maintain automations</span>
                    </label>
                </div>
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Do you have SOPs or documentation for your workflows? <span className="text-red-500">*</span></label>
                {errors.has_documentation && <p className="text-red-500 text-sm mb-2">{errors.has_documentation}</p>}
                <div className="flex flex-col space-y-3">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="has_documentation"
                            value="yes"
                            checked={formData.has_documentation === 'yes'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Yes - We have detailed documentation</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="has_documentation"
                            value="somewhat"
                            checked={formData.has_documentation === 'somewhat'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Somewhat - We have some documentation but it&apos;s not complete</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="has_documentation"
                            value="no"
                            checked={formData.has_documentation === 'no'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">No - We don&apos;t have documented processes yet</span>
                    </label>
                </div>
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Do you want to learn or delegate? <span className="text-red-500">*</span></label>
                {errors.approach_preference && <p className="text-red-500 text-sm mb-2">{errors.approach_preference}</p>}
                <div className="flex flex-col space-y-3">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="approach_preference"
                            value="teach_me"
                            checked={formData.approach_preference === 'teach_me'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Teach me - I want to learn how to do this myself</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="approach_preference"
                            value="setup_for_me"
                            checked={formData.approach_preference === 'setup_for_me'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Set it up for me - I&apos;d rather have you implement it</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="approach_preference"
                            value="not_sure"
                            checked={formData.approach_preference === 'not_sure'}
                            onChange={handleInputChange}
                            className="mr-3 h-5 w-5"
                        />
                        <span className="text-gray-300">Not sure - Let&apos;s discuss options</span>
                    </label>
                </div>
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
        
        // Step 6: Contact Information
        <motion.div 
            key="step6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
        >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">First Name <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.first_name ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                />
                {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Last Name <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.last_name ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                />
                {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white`}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
            
            <div className="mb-6">
                <div className="flex items-start">
                    <input 
                        type="checkbox" 
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                consent: e.target.checked
                            });
                            // Clear error if it exists
                            if (errors.consent) {
                                setErrors({
                                    ...errors,
                                    consent: null
                                });
                            }
                        }}
                        className={`mt-1 mr-3 h-5 w-5 ${errors.consent ? 'border-red-500' : ''}`}
                        required
                    />
                    <label htmlFor="consent" className="text-gray-300 text-sm">
                        I agree to receive communications from OpsPartner.ai about my assessment results and related services. I understand my data will be processed according to the privacy policy.
                    </label>
                </div>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
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
        
        // Step 7: Thank You
        <motion.div 
            key="step7"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
            className="text-center"
        >
            <div className="text-green-400 text-5xl mb-6">✓</div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-8">
                Your assessment has been submitted successfully. We&apos;ll analyze your business needs and reach out within 1-2 business days with personalized insights and next steps.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">What happens next?</h3>
                <ol className="text-left space-y-3 text-gray-300 list-decimal pl-6">
                    <li>Our team will review your assessment responses</li>
                    <li>We&apos;ll prepare a custom analysis of your automation opportunities</li>
                    <li>You&apos;ll receive an email with a link to book a 30-minute discovery call</li>
                    <li>On the call, we&apos;ll discuss your specific needs and recommend next steps</li>
                </ol>
            </div>
            
            <p className="text-gray-400 mb-6">
                If you have any questions in the meantime, feel free to email us at <a href="mailto:jason@opspartner.ai" className="text-blue-400 hover:underline">hello@opspartner.ai</a>
            </p>
            
            <Link href="/" passHref>
            <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all">
                Return to Homepage
            </a>
            </Link>
        </motion.div>
    ];
    
    return (
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            {step <= totalSteps && renderStepIndicator()}
            
            <form>
                {formSteps[step - 1]}
            </form>
        </div>
    );
}