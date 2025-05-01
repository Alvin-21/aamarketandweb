"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightNew() {
    return (
        <div className="h-screen w-full rounded-md flex items-center md:justify-center  antialiased  relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-snug">
                    A Creative Partner for <Highlight className="text-black">Your Digital Growth</Highlight>
                </h1>
            </div>
        </div>
    );
}

const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block rounded-lg bg-gradient-to-r from-blue-200 via-[#6cc3ff] to-[#f1f9ff] px-1 pb-1`,
                className,
            )}
        >
            {children}
        </motion.span>
    );
};