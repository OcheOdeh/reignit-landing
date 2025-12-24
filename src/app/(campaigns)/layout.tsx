"use client";

import CampaignNavbar from '@/components/campaign/CampaignNavbar';

export default function CampaignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-dark-bg text-white selection:bg-accent selection:text-white">
            <CampaignNavbar />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}
