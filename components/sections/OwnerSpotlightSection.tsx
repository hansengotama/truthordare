"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
    "Outstanding Bartender of the Year 2025",
    "Auckland’s top bespoke cocktail lounge",
    "Crafted flavour with bold hospitality",
];

export default function OwnerSpotlightSection() {
    return (
        <section id="theo" className="border-t border-white/10 bg-[#060405] py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-sm uppercase tracking-[0.34em] text-[#bd1e2e]/90">Owner spotlight</p>
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Theodore Tjandra</h2>
                        <p className="max-w-2xl text-base leading-8 text-zinc-300">
                            Founder and award-winning bartender. Theodore brings a deep respect for hospitality, a love of flavour, and a refined sense of drama to every cocktail and every guest experience.
                        </p>
                        <div className="space-y-3 text-sm text-zinc-300">
                            {awards.map((item) => (
                                <p key={item}>• {item}</p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative overflow-hidden rounded-[1.5rem] bg-[#0d0b10] h-[420px] sm:h-[520px]"
                    >
                        <Image src="/owner1.webp" alt="Theodore Tjandra" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
