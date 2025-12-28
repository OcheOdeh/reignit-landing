"use client";

import CampaignNavbar from '@/components/campaign/CampaignNavbar';

export default function CampaignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
