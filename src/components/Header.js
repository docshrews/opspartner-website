"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <Image 
              src="/images/logo.svg" 
              alt="OpsPartner.ai Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">OpsPartner.ai</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link href="/assessment" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
            Free Assessment
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 z-50">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="block py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/assessment" 
              className="block py-2 bg-blue-600 hover:bg-blue-700 px-4 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}