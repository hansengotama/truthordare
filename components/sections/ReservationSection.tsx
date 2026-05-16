"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ReservationSection() {
    return (
        <section id="reservation" className="border-t border-white/10 bg-[#060405] py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-[1.5rem] bg-[#0f0d11]/90 p-8 sm:p-12"
                >
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.34em] text-[#bd1e2e]/90">Reservation</p>
                            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Secure your seat in the lounge.
                            </h2>
                            <p className="max-w-2xl text-base leading-8 text-zinc-300">
                                Reserve the perfect table for an intimate night out, group celebration, or curated tasting experience. Our service is designed for guests who want elevated energy and warm hospitality.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                            <Button className="w-full bg-[#bd1e2e] text-white hover:bg-[#9a1d25] sm:w-auto">Book now</Button>
                            <Button variant="secondary" className="w-full sm:w-auto">Contact us</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
