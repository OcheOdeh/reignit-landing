"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Blog category card component
interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-accent transition-colors"
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

// Blog post preview component
interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  delay: number;
}

const BlogPostPreview: React.FC<BlogPostProps> = ({ title, excerpt, category, date, imageUrl, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gradient-start/20 to-primary-gradient-end/10 z-10"></div>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-accent">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-headline font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <Link 
          href="#" 
          className="text-accent hover:underline inline-flex items-center"
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [productUpdates, setProductUpdates] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would call the API endpoint
    console.log('Subscribing with email:', email, 'Product updates:', productUpdates);
    setSubscribed(true);
    setEmail('');
    setProductUpdates(false);
  };

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
              Field Notes From the <span className="text-accent">AI Frontier</span>
            </h1>
            
            <p className="text-xl text-neutral-smoke mb-8">
              Every sprint we learn something new—whether it's lowering LLM latency from 900 ms to 250 ms, or turning a children's cartoon engine into a lead-gen machine. The Reignit Blog captures these insights in bite-size, engineering-meets-business stories.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Content Pillars Section */}
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
              Content <span className="text-accent">Pillars</span>
            </h2>
            <p className="text-xl text-neutral-smoke max-w-3xl mx-auto">
              Explore our diverse range of topics covering everything from technical deep dives to business insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Build Logs" 
              description="Deep dives into our latest agent architectures." 
              icon={<span>🛠️</span>}
              delay={0.1}
            />
            <CategoryCard 
              title="ROI Watch" 
              description="Case studies with real numbers (what worked, what flopped)." 
              icon={<span>📊</span>}
              delay={0.2}
            />
            <CategoryCard 
              title="Creative AI" 
              description="Tutorials on toonification, AI graphic design, indie RPGs." 
              icon={<span>🎨</span>}
              delay={0.3}
            />
            <CategoryCard 
              title="Culture" 
              description="How we run async retros, hack weeks, and global off-sites." 
              icon={<span>🌍</span>}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-20 bg-gradient-to-b from-dark-canvas to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              Featured <span className="text-accent">Articles</span>
            </h2>
            <p className="text-xl text-neutral-smoke max-w-3xl mx-auto">
              Check back soon for our latest insights and stories.
            </p>
          </motion.div>
          
          <div className="flex items-center justify-center">
            <motion.div 
              className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-800 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl">✍️</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                Join Our AI Community
              </h3>
              <p className="text-lg text-neutral-smoke mb-6">
                Be part of our growing community of AI enthusiasts and professionals. Subscribe below to receive exclusive insights, early access to tutorials, and special invitations to our virtual events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-20 bg-dark-canvas">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6">
              Stay <span className="text-accent">Updated</span>
            </h2>
            <p className="text-xl text-neutral-smoke mb-8">
              Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.
            </p>
            
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900 rounded-lg p-6 border border-accent"
              >
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-2">Thank You for Subscribing!</h3>
                <p className="text-neutral-smoke">You'll be the first to know when we publish new content.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="cta-primary md:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <label className="flex items-center text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-accent rounded border-gray-700 bg-gray-900"
                      checked={productUpdates}
                      onChange={(e) => setProductUpdates(e.target.checked)}
                    />
                    <span className="ml-2">Also send me product updates and announcements</span>
                  </label>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
