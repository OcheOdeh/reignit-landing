"use client";

import TruthHero from "@/components/rewriting-africa/TruthHero";
import TruthServices from "@/components/rewriting-africa/TruthServices";
import TruthDonation from "@/components/rewriting-africa/TruthDonation";
import TruthRoadmap from "@/components/rewriting-africa/TruthRoadmap";

export default function TruthEnginePage() {
    return (
        <main className="bg-black min-h-screen">
            <TruthHero />
            <TruthServices />
            <TruthDonation />
            <TruthRoadmap />
        </main>
    );
}
