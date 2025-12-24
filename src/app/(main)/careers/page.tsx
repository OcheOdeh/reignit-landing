"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Benefit card component for the "Why Work With Us" section
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4 text-accent text-3xl">{icon}</div>
      <h3 className="text-xl font-headline font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

// Job posting component
interface JobPostingProps {
  title: string;
  department: string;
  location: string;
  delay: number;
}

const JobPosting: React.FC<JobPostingProps> = ({ title, department, location, delay }) => {
  return (
    <motion.div 
      className="border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-headline font-bold text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{department}</span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{location}</span>
      </div>
      <Link 
        href="#" 
        className="text-accent hover:underline inline-flex items-center"
      >
        View details
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-dark-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gradient-start/10 to-primary-gradient-end/5 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6">
              Join the squad that's putting <span className="text-accent">meaningful AI</span> into production.
            </h1>
            
            <p className="text-xl text-neutral-smoke mb-8">
              We're building the future of AI-powered business solutions and we're looking for talented individuals to join our team.
            </p>
            
            <Link 
              href="#open-positions" 
              className="cta-primary text-center inline-block"
            >
              Check Our Hiring Status
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Why Work With Us Section */}
      <section className="py-20 bg-dark-canvas">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              Why Work <span className="text-accent">With Us</span>
            </h2>
            <p className="text-xl text-neutral-smoke max-w-3xl mx-auto">
              We offer more than just a job – we provide an opportunity to shape the future of AI.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Remote-First Freedom" 
              description="Work anywhere between UTC-8 → UTC+3, async by design." 
              icon={<span>🌎</span>}
              delay={0.1}
            />
            <BenefitCard 
              title="Ship Fast, Learn Faster" 
              description="Quarterly Hack Weeks, $1k/year personal R&D stipend." 
              icon={<span>🚀</span>}
              delay={0.2}
            />
            <BenefitCard 
              title="Impact at Scale" 
              description="Your GPT prompt or MLOps script may touch millions of users." 
              icon={<span>📈</span>}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Hiring Status Section */}
      <section id="open-positions" className="py-20 bg-gradient-to-b from-dark-canvas to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              Hiring <span className="text-accent">Status</span>
            </h2>
            <p className="text-xl text-neutral-smoke max-w-3xl mx-auto">
              We're not currently hiring, but we're always interested in connecting with talented individuals.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-white mb-4">
              Check Back Soon
            </h3>
            <p className="text-lg text-neutral-smoke mb-6">
              We're not actively hiring at the moment, but we're always on the lookout for exceptional talent. 
              Please check back in the future for new opportunities or reach out to introduce yourself.
            </p>
            <Link 
              href="/contact" 
              className="text-accent hover:underline inline-flex items-center"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Diversity Note Section */}
      <section className="py-20 bg-dark-canvas">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-accent">
              <h2 className="text-2xl font-headline font-bold text-white mb-4">
                Diversity Note
              </h2>
              <p className="text-lg text-neutral-smoke">
                We're committed to a bias-free hiring funnel. All take-home tasks are anonymised; we benchmark comp globally, not locally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-dark-canvas">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6">
              Don't see the right <span className="text-accent">fit?</span>
            </h2>
            <p className="text-xl text-neutral-smoke mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
            </p>
            <Link 
              href="/contact" 
              className="cta-primary text-center inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
