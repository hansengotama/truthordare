"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
    { src: "/img2.webp", label: "Bar interior" },
    { src: "/img3.webp", label: "Signature cocktail" },
    { src: "/img4.webp", label: "Night lounge" },
    { src: "/img5.webp", label: "Warm hospitality" },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="border-t border-white/10 bg-[#070608] py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="space-y-6 text-center">
                    <p className="text-sm uppercase tracking-[0.34em] text-[#e8293b]">Gallery</p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Scenes from the bar.
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-400">
                        Quiet corners, dramatic lighting, and crafted moments captured in the space where flavour and atmosphere meet.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.src}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="overflow-hidden rounded-[1.5rem] bg-[#0d0b10]"
                        >
                            <div className="relative h-80 sm:h-96">
                                <Image src={item.src} alt={item.label} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 25vw" />
                                <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[0.28em] text-white">{item.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
