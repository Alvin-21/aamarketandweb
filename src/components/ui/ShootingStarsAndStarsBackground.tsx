"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import { FlipWordsDemo } from "./FlipWords";

export function ShootingStarsAndStarsBackground() {
    return (
        <>
            <div className="min-h-screen rounded-md flex flex-col items-center justify-center relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="relative bottom-8 flex-col z-10 md:leading-tight max-w-5xl mx-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-200 tracking-tight font-medium bg-clip-text flex items-center gap-2 md:gap-8">
                        <span className="text-7xl sm:text-8xl md:9xl font-extrabold">A & A</span>
                        <span className="text-4xl sm:text-5xl md:6xl font-bold">Market and Web</span>
                    </h2>
                </motion.div>
                <ShootingStars />
                <StarsBackground />
                <FlipWordsDemo />
            </div>
            
        </>
    );
}