"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
    default:
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd1e2e] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    secondary:
        "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/10",
    ghost:
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[#bd1e2e] hover:text-white transition",
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants[variant], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
