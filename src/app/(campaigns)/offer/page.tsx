"use client";

import CampaignHero from '@/components/campaign/CampaignHero';
import CampaignNavbar from '@/components/campaign/CampaignNavbar';
import CampaignMedia from '@/components/campaign/CampaignMedia';
import CampaignFeatures from '@/components/campaign/CampaignFeatures';
import CampaignCTA from '@/components/campaign/CampaignCTA';

export default function OfferPage() {
    return (
        <div className="min-h-screen bg-dark-bg text-white selection:bg-accent selection:text-white">
            <CampaignNavbar />
            <main className="pt-16">
                <CampaignHero
                    headline="Launch Your MVP in 30 Days"
                    subheadline="We help founders turn ideas into scalable products with our proven AI-driven development process."
                    ctaText="Start Your Project"
                    ctaLink="#payment"
                />

                <CampaignMedia
                    caption="Watch how we built a fintech app in just 4 weeks."
                    // videoUrl="https://www.youtube.com/embed/your-video-id" 
                    // OR use an image:
                    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                />

                <CampaignFeatures
                    title="Why Choose Reignit?"
                    features={[
                        {
                            title: "Rapid Development",
                            description: "From concept to code in record time using our proprietary AI  stack.",
                            icon: "⚡"
                        },
                        {
                            title: "Scalable Architecture",
                            description: "Built on Next.js and Supabase to handle millions of users from day one.",
                            icon: "🏗️"
                        },
                        {
                            title: "Growth Focused",
                            description: "We don't just build; we design for conversion and user retention.",
                            icon: "📈"
                        }
                    ]}
                />

                <div id="payment">
                    <CampaignCTA
                        headline="Ready to Build?"
                        subheadline="Join the community of founders delivering real-world impact."
                        ctaText="Secure Your Spot"
                        ctaLink="https://t.me/reignitcommunity"
                    />
                </div>
            </main>
        </div>
    );
}
