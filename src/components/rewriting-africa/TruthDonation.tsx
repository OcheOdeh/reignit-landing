"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TruthDonation() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [formState, setFormState] = useState({
        email: "",
        phone: "",
        country: "",
        telegram: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // File Upload State
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0); // Mock progress for now as fetch doesn't support it easily without XHR
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'completed' | 'error'>('idle');
    const [fileName, setFileName] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Add error message state

    // Metadata Form State
    const [metadata, setMetadata] = useState({
        name: "",
        origin: "",
        residence: "",
        contact: ""
    });
    const [metadataSubmitted, setMetadataSubmitted] = useState(false);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        setUploadStatus('idle');
        setErrorMessage(""); // Reset error message
        setFileName(file.name);
        setUploadProgress(10); // Start progress


        try {
            // 1. Get Signed URL
            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename: file.name, contentType: file.type })
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                console.error("Step 1 Error Details:", errData);

                let missingVars = "";
                if (errData.details) {
                    missingVars = Object.keys(errData.details)
                        .filter(key => errData.details[key] === false && key !== 'availableEnvKeys')
                        .join(", ");

                    if (errData.details.availableEnvKeys) {
                        console.log("Server Env Keys:", errData.details.availableEnvKeys);
                    }
                }

                throw new Error(`Step 1 (Auth) Failed: ${res.status} - ${errData.error || res.statusText}. ${missingVars ? 'Missing: ' + missingVars : ''}`);
            }
            const { url, publicUrl } = await res.json();
            setFileUrl(publicUrl); // Save public URL for email
            setUploadProgress(40);

            // 2. Upload to GCS
            const uploadRes = await fetch(url, {
                method: 'PUT',
                body: file,
                headers: { 'Content-Type': file.type }
            });

            if (!uploadRes.ok) {
                console.error("Step 2 Error Status:", uploadRes.status);
                throw new Error(`Step 2 (Storage) Failed: ${uploadRes.status} - Potential CORS or Bucket Config issue.`);
            }

            setUploadProgress(100);
            setUploadStatus('success');
            setUploading(false);
            // Do NOT auto-reset; let user fill the form

        } catch (error: any) {
            console.error(error);
            setUploadStatus('error');
            setErrorMessage(error.message || "Unknown error occurred");
            setUploading(false);
        }
    };

    const handleMetadataSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/donate-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fileName,
                    fileUrl,
                    contributorName: metadata.name,
                    countryOfOrigin: metadata.origin,
                    residence: metadata.residence,
                    email: metadata.contact, // Using 'contact' field as email/phone mainly
                    phone: "" // Optional separate field if needed, but simplifying for now
                })
            });

            if (res.ok) {
                setMetadataSubmitted(true);
                setUploadStatus('completed');
                // Reset after delay
                setTimeout(() => {
                    setUploadStatus('idle');
                    setMetadataSubmitted(false);
                    setMetadata({ name: "", origin: "", residence: "", contact: "" });
                    setFileName("");
                }, 5000);
            }
        } catch (error) {
            console.error("Failed to submit metadata", error);
        }
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock API submission
        setTimeout(() => {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setIsContactOpen(false);
                setFormState({ email: "", phone: "", country: "", telegram: "", message: "" });
            }, 3000);
        }, 1000);
    };

    return (
        <section className="py-24 bg-[#120A05] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* LEFT: Donate Data */}
                <div>
                    <div className="mb-6">
                        <span className="text-[#4CBB17] font-mono tracking-widest text-sm uppercase">// ACTION_REQUIRED: UPLOAD</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
                            Donate Data. Save History.
                        </h2>
                        <p className="text-[#E5E4E2]/80 mb-6 font-light leading-relaxed">
                            We need raw, unfiltered ground truth. Scans of family albums, audio of village elders, or old manuscripts.
                            Digitize them before they fade.
                        </p>

                        {/* Data Prep Note */}
                        <div className="bg-[#4CBB17]/10 border border-[#4CBB17]/20 p-4 rounded-lg mb-8 text-sm text-[#E5E4E2]">
                            <strong className="text-[#4CBB17] block mb-2">Preparation Instructions:</strong>
                            <ul className="list-disc list-inside space-y-1 opacity-80">
                                <li>Ensure audio is clear with English translation or meaning provided.</li>
                                <li>Label files clearly with Country, Village, and Family Name.</li>
                                <li>Group related files into folders before uploading.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Drag & Drop Visual */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="border-2 border-dashed border-[#4CBB17]/30 bg-[#4CBB17]/5 rounded-2xl p-10 text-center cursor-pointer hover:border-[#4CBB17] hover:bg-[#4CBB17]/10 transition-all group"
                    >
                        <span className="material-symbols-outlined text-5xl text-[#4CBB17] mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                        <h3 className="text-xl font-bold text-white mb-2">Drop Files to Digitize</h3>
                        <p className="text-gray-500 text-sm mb-6">Supported: ALL FILE TYPES (Max 5GB per upload)</p>

                        <div className="relative">
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                onChange={handleFileUpload}
                                disabled={uploading}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`inline-block px-6 py-2 bg-[#4CBB17] text-[#120A05] font-bold rounded-full hover:bg-white transition-colors cursor-pointer ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                {uploading ? `Uploading... ${uploadProgress}%` : 'Select Files'}
                            </label>
                        </div>


                        {uploadStatus === 'success' && !metadataSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 bg-[#0a0a0a] p-4 rounded-xl border border-[#4CBB17]/30 text-left"
                            >
                                <h4 className="text-[#4CBB17] font-bold mb-3 text-sm uppercase tracking-wider">Contributor Details</h4>
                                <form onSubmit={handleMetadataSubmit} className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-2 text-sm text-white focus:border-[#4CBB17] outline-none"
                                        value={metadata.name}
                                        onChange={e => setMetadata({ ...metadata, name: e.target.value })}
                                    />
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            type="text"
                                            placeholder="Country of Origin"
                                            required
                                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-2 text-sm text-white focus:border-[#4CBB17] outline-none"
                                            value={metadata.origin}
                                            onChange={e => setMetadata({ ...metadata, origin: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Current Residence"
                                            required
                                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-2 text-sm text-white focus:border-[#4CBB17] outline-none"
                                            value={metadata.residence}
                                            onChange={e => setMetadata({ ...metadata, residence: e.target.value })}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Email or Phone Number"
                                        required
                                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-2 text-sm text-white focus:border-[#4CBB17] outline-none"
                                        value={metadata.contact}
                                        onChange={e => setMetadata({ ...metadata, contact: e.target.value })}
                                    />
                                    <button type="submit" className="w-full py-2 bg-[#4CBB17] text-[#120A05] font-bold rounded-lg hover:bg-white transition-colors text-sm">
                                        Complete Donation
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {uploadStatus === 'completed' && (
                            <div className="mt-4 p-4 bg-[#4CBB17]/10 rounded-xl border border-[#4CBB17]/20">
                                <span className="material-symbols-outlined text-4xl text-[#4CBB17] mb-2">verified</span>
                                <p className="text-[#4CBB17] font-bold">Donation Recorded!</p>
                                <p className="text-gray-400 text-xs mt-1">Thank you for preserving history.</p>
                            </div>
                        )}

                        {uploadStatus === 'error' && (
                            <div className="mt-3 text-red-500 font-bold text-sm">
                                <p>
                                    <span className="material-symbols-outlined align-middle mr-1 text-lg">error</span>
                                    Upload Failed.
                                </p>
                                <p className="text-xs font-mono mt-1 bg-red-500/10 p-2 rounded">
                                    {errorMessage}
                                </p>
                            </div>
                        )}
                        <p className="mt-4 text-[10px] text-gray-500 max-w-xs mx-auto leading-tight">
                            By uploading files for the purpose of Truth Model training, you accept or consent to the open-source licensing and ethical usage of this data for removing bias.
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT: Funding */}
                <div>
                    <div className="mb-6">
                        <span className="text-[#FFD700] font-mono tracking-widest text-sm uppercase">// ACTION_REQUIRED: FUNDING</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
                            Sponsor the Training.
                        </h2>
                        <p className="text-[#E5E4E2]/80 mb-8 font-light leading-relaxed">
                            Sovereign compute is expensive. Your contribution directly funds H100 GPUs, pays our Cultural Custodians, travels to collate truth and build accessible 'Truth Model' for all to use.
                        </p>
                    </div>

                    {/* Consolidated Donation List */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FFD700]">verified</span>
                            Project Activities Supported
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Digitizing rare and at-risk manuscripts",
                                "Training sovereign LoRA models for specific tribes",
                                "Compensating cultural elders for Reinforcement Learning with Human Feedback (RLHF)",
                                "Hosting secure, semantic heritage libraries",
                                "Funds travels to collate ground truth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#E5E4E2]">
                                    <span className="material-symbols-outlined text-[#4CBB17] text-lg mt-0.5">check_circle</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://buy.stripe.com/test_eVa..." // Placeholder or real link if provided
                            target="_blank"
                            className="block w-full py-4 text-center bg-[#FFD700] text-[#120A05] font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                        >
                            Donate/Sponsor
                        </a>
                    </div>

                    {/* Participant / Contact */}
                    <div className="flex items-center justify-between bg-[#120A05] border border-gray-800 p-6 rounded-2xl hover:border-[#4CBB17]/50 transition-colors">
                        <div>
                            <h4 className="text-white font-bold text-lg">Become a Participant</h4>
                            <p className="text-gray-500 text-sm">Join the inner circle of patrons.</p>
                        </div>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="px-6 py-2 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {isContactOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a1a1a] border border-gray-700 w-full max-w-md rounded-2xl p-8 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsContactOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-2">Become a Participant</h3>
                                    <p className="text-gray-400 text-sm mb-6">Leave your details and we will reach out via <span className="text-cyan-400">kenneth@reignitinc.com</span>.</p>

                                    <form onSubmit={handleContactSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Email</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-[#4CBB17] outline-none transition-colors"
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-[#4CBB17] outline-none transition-colors"
                                                value={formState.phone}
                                                onChange={e => setFormState({ ...formState, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Country of Origin</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-[#4CBB17] outline-none transition-colors"
                                                value={formState.country}
                                                onChange={e => setFormState({ ...formState, country: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Telegram Handle</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-[#4CBB17] outline-none transition-colors"
                                                value={formState.telegram}
                                                onChange={e => setFormState({ ...formState, telegram: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Short Message</label>
                                            <textarea
                                                rows={3}
                                                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-[#4CBB17] outline-none transition-colors"
                                                value={formState.message}
                                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-[#4CBB17] text-[#120A05] font-bold rounded-xl hover:bg-white transition-colors"
                                        >
                                            SEND REQUEST
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <span className="material-symbols-outlined text-6xl text-[#4CBB17] mb-4">check_circle</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                                    <p className="text-gray-400">We have received your details. Expect an email from us shortly.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
