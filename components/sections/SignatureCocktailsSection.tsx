"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cocktails = [
    {
        name: "Velvet Kiss",
        feature: "Saffron gin, black cherry, jasmine cordial",
        label: "House favorite",
        image: "/menu1.webp",
    },
    {
        name: "Smoke & Mirrors",
        feature: "Mezcal, absinthe mist, charred fig",
        label: "Bold & smoky",
        image: "/menu3.webp",
    },
    {
        name: "Midnight Ritual",
        feature: "Oak-aged bourbon, yuzu, velvet spice",
        label: "Moody citrus",
        image: "/menu4.webp",
    },
];

export default function SignatureCocktailsSection() {
    return (
        <section id="cocktails" className="border-t border-white/10 bg-[#060405] py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl space-y-6">
                    <p className="text-sm uppercase tracking-[0.34em] text-[#bd1e2e]/90">Signature cocktails</p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Crafted with daring flavours and refined balance.
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-zinc-400">
                        These are the pours that define our bar: rich textures, layered aromatics, and a polished edge that feels cinematic and unmistakably Auckland.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {cocktails.map((item, index) => (
                        <motion.article
                            key={item.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="overflow-hidden rounded-[1.5rem] bg-[#0d0b10]"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                            </div>
                            <div className="space-y-4 p-6">
                                <p className="text-sm uppercase tracking-[0.3em] text-[#bd1e2e]/90">{item.label}</p>
                                <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                                <p className="text-sm leading-6 text-zinc-400">{item.feature}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
