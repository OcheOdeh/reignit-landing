"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Value card component for the core values section
interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, delay }) => {
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

export default function AboutPage() {
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
              Reignit Inc. — <span className="text-accent">Practical AI, Real-World ROI</span>
            </h1>

            <p className="text-xl text-neutral-smoke mb-8">
              We're a full-stack AI product studio and consulting house that helps businesses reignite growth with conversational bots, automation pipelines, agent platforms, and creative AI products. From day-one pilots to billion-user scale, we turn bleeding-edge research into bottom-line impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-neutral-smoke max-w-3xl mx-auto">
              These principles guide everything we do, from client interactions to product development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              title="Outcome-Obsessed"
              description="We measure success in client KPIs, not code commits."
              icon={<span>📈</span>}
              delay={0.1}
            />
            <ValueCard
              title="Human-Centric"
              description="AI should augment people, never replace their spark."
              icon={<span>👤</span>}
              delay={0.2}
            />
            <ValueCard
              title="Build → Learn → Iterate"
              description="30-day MVP cycles keep us ahead of the curve."
              icon={<span>🔄</span>}
              delay={0.3}
            />
            <ValueCard
              title="Radical Transparency"
              description="Dashboards, shared docs, honest road-maps."
              icon={<span>🔍</span>}
              delay={0.4}
            />
            <ValueCard
              title="Creative Play"
              description="Our AI Academy and game demos remind us tech can delight."
              icon={<span>🎮</span>}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-dark-canvas to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6">
                Our <span className="text-accent">Approach</span>
              </h2>
              <p className="text-lg text-neutral-smoke mb-6">
                We believe in practical AI solutions that deliver measurable results. Our approach combines cutting-edge technology with business acumen to create AI systems that drive real value.
              </p>
              <p className="text-lg text-neutral-smoke mb-6">
                Each project begins with a thorough understanding of your business goals and challenges. We then design and implement AI solutions tailored to your specific needs, with a focus on rapid iteration and continuous improvement.
              </p>
              <p className="text-lg text-neutral-smoke">
                Our team of experts brings together diverse skills in machine learning, software engineering, UX design, and business strategy to deliver holistic solutions that work in the real world.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-primary-gradient-start rounded-full flex items-center justify-center">
                      <span className="text-5xl">🚀</span>
                    </div>
                    <p className="text-xl text-white font-medium">
                      From concept to deployment in record time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to <span className="text-accent">Reignite</span> Your Business?
            </h2>
            <p className="text-xl text-neutral-smoke mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <Link
              href="#audit"
              className="cta-primary text-center inline-block mb-12"
            >
              Book Free AI Audit
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gray-800 pt-12">
              <div>
                <h3 className="text-white font-bold mb-2">Visit Us</h3>
                <p className="text-gray-400">5830 E 2nd street,<br />Casper, Wyoming</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Email Us</h3>
                <a href="mailto:sales@reignitinc.com" className="text-gray-400 hover:text-accent transition-colors">sales@reignitinc.com</a>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Call Us</h3>
                <a href="tel:+13395655737" className="text-gray-400 hover:text-accent transition-colors">+1 (339) 565-5737</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
