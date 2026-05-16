"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenis = useRef<Lenis | null>(null);

    useEffect(() => {
        if (!window) return;

        lenis.current = new Lenis({
            duration: 1.45,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true,
            orientation: "vertical",
            gestureOrientation: "vertical",
            infinite: false,
        });

        function raf(time: number) {
            lenis.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.current?.destroy();
            lenis.current = null;
        };
    }, []);

    return <>{children}</>;
}
