"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Sparkles() {
    return (
        <div className="h-[10rem] md:h-[12rem] w-full mt-3 flex flex-col items-center justify-start overflow-hidden">
            <h1 className="md:text-7xl text-3xl lg:text-9xl pb-1 font-bold text-center text-white relative z-20">
                A & A
            </h1>
            <div className="w-full h-24 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px]  blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px " />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                <div className="relative bottom-16 mx-auto flex w-[10rem] w-fit items-center justify-center">
                    <div className="relative z-10 flex w-full items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                        <div className="relative z-20 flex justify-center w-full rounded-[0.60rem] bg-slate-900 p-2">
                            <span className="text-white text-xl">Market and Web</span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}