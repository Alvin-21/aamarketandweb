'use client';

import { motion } from "framer-motion";

export default function Headings() {
    return (
        <div className="flex flex-col gap-4 text-4xl z-20 md:text-7xl lg:text-8xl font-bold text-center font-sans tracking-tight">
            <motion.h1
                initial={{ x: "-150%" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
            >
                Smart Marketing
            </motion.h1>
            <motion.h1
                initial={{ x: "150%" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
                className="text-blue-100"
            >
                Sleek Web
            </motion.h1>
            <motion.h1
                initial={{ x: "150%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1, bounce: 0.7, delay: 1 }}
                className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#F0892E] via-white to-blue-100"
            >
                Serious Results
            </motion.h1>
        </div>
    );
}