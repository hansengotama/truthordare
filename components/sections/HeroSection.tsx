"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pb-16 pt-6 sm:pb-20 md:pt-8">
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
            <div className="absolute inset-0">
                <Image
                    src="/img6.jpg"
                    alt="Truth or Dare Bar atmosphere"
                    fill
                    className="object-cover object-center opacity-100"
                    sizes="100vw"
                    priority
                />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-6 pb-10 pt-6 sm:px-8 lg:px-12">
                <header className="flex items-center justify-between gap-6 text-sm text-zinc-200">
                    <div className="relative h-24 w-24">
                        <Image src="/logo.png" alt="Truth or Dare Bar logo" width={92} height={92} loading="eager" className="object-contain drop-shadow-lg" />
                    </div>
                </header>

                <div className="flex flex-1 flex-col justify-end gap-10 pt-12 lg:pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="space-y-8 max-w-3xl"
                    >
                        <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            Auckland’s intimate cocktail lounge.
                        </h1>
                        <p className="max-w-2xl text-base leading-8 text-white sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            Artful cocktails and moody hospitality in Snickel Lane.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button className="w-full bg-[#bd1e2e] text-white hover:bg-[#9a1d25] sm:w-auto shadow-lg">Reserve a Table</Button>
                            <Button variant="secondary" className="w-full sm:w-auto shadow-md">View menu</Button>
                        </div>
                        <div className="grid gap-4 text-sm sm:grid-cols-2">
                            <div className="space-y-1 rounded-[1.5rem] bg-black/40 backdrop-blur-sm border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.34em] text-[#bd1e2e]/90">OPEN</p>
                                <p className="text-sm uppercase tracking-[0.24em] text-white">MON–SAT · 4:00PM – MIDNIGHT</p>
                            </div>
                            <div className="space-y-1 rounded-[1.5rem] bg-black/40 backdrop-blur-sm border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.34em] text-[#bd1e2e]/90">Location</p>
                                <p className="text-sm uppercase tracking-[0.24em] text-white">9/23 Commerce Street<br />Snickel Lane, Auckland Central</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
