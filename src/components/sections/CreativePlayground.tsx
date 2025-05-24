import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const CreativePlayground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'toonz' | 'rpg'>('toonz');
  const [toonzLoaded, setToonzLoaded] = useState(false);
  const [rpgLoaded, setRpgLoaded] = useState(false);

  // Lazy load the RPG iframe when the tab is active and in view
  useEffect(() => {
    if (isInView && activeTab === 'rpg' && !rpgLoaded) {
      setRpgLoaded(true);
    }
  }, [isInView, activeTab, rpgLoaded]);

  return (
    <section id="playground" className="py-20 bg-dark-canvas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Creative <span className="text-accent">Playground</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-smoke max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience our unique AI-powered creative tools firsthand
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Tab navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-full p-1 flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'toonz'
                    ? 'bg-primary-gradient-start text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('toonz')}
              >
                CustomToonz Demo
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'rpg'
                    ? 'bg-primary-gradient-start text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('rpg')}
              >
                Mini RPG
              </button>
            </div>
          </div>

          {/* Tab content */}
          <motion.div
            className="glass-card rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* CustomToonz Demo */}
            {activeTab === 'toonz' && (
              <div className="p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-headline font-bold text-white mb-2">
                    CustomToonz AI Character Generator
                  </h3>
                  <p className="text-neutral-smoke mb-4">
                    Create custom animated characters with our WASM-powered AI tool. Type a description and watch your character come to life!
                  </p>
                  
                  <div className="mb-4">
                    <label htmlFor="character-description" className="block text-sm font-medium text-gray-400 mb-2">
                      Character Description
                    </label>
                    <textarea
                      id="character-description"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                      rows={3}
                      placeholder="e.g., A cyberpunk robot with neon blue accents and a friendly smile"
                      onChange={() => !toonzLoaded && setToonzLoaded(true)}
                    ></textarea>
                  </div>
                  
                  <button className="cta-primary">
                    Generate Character
                  </button>
                </div>
                
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  {toonzLoaded ? (
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-5xl">🤖</span>
                      </div>
                      <p className="text-neutral-smoke">
                        Your character will appear here. In the full version, this uses WebAssembly to generate characters client-side.
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500">Enter a description to start</p>
                  )}
                </div>
              </div>
            )}

            {/* Mini RPG */}
            {activeTab === 'rpg' && (
              <div className="aspect-video bg-gray-900">
                {rpgLoaded ? (
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-5xl">🎮</span>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-white mb-2">
                        AI Adventure
                      </h3>
                      <p className="text-neutral-smoke mb-4">
                        In the full version, this loads an interactive RPG game powered by our AI storytelling engine.
                      </p>
                      <button className="cta-primary">
                        Start Adventure
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativePlayground;
