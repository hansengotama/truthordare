"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section id="story" className="border-t border-white/10 bg-[#070608] py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-2xl"
                >
                    <p className="text-sm uppercase tracking-[0.34em] text-[#bd1e2e]/90">Our story</p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Truth or Dare is a bespoke cocktail bar in Auckland, New Zealand, where timeless classics meet modern mixology.
                    </h2>
                    <p className="text-base leading-8 text-zinc-300">
                        Led by hospitality visionary Theodore Tjandra, the experience blends premium spirits, inventive cocktails, and seasonal bites designed to awaken the senses.
                    </p>
                    <p className="text-base leading-8 text-zinc-300">
                        Nestled in the heart of Auckland, Truth or Dare offers an intimate setting for after-work drinks, date nights, and unforgettable evenings with friends.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative overflow-hidden rounded-[1.5rem] bg-[#0d0b10] h-[420px] sm:h-[520px]"
                >
                    <Image src="/menufood1.jpg" alt="Signature bar plating" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
                </motion.div>
            </div>
        </section>
    );
}
