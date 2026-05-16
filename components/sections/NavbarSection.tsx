"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
    { label: "Cocktails", href: "#cocktails" },
    { label: "Story", href: "#story" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reserve", href: "#reservation" },
];

export default function NavbarSection() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-black/80" : "bg-black/50"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                <a href="#home">
                    <Image
                        src="/logo.webp"
                        alt="Truth or Dare Bar"
                        width={135}
                        height={20}
                        priority
                        loading="eager"
                    />
                </a>
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
