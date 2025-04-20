import { heroui } from "@heroui/react";

import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                rotate: "rotate 3s linear infinite",
            },
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg) scale(10)" },
                    "100%": { transform: "rotate(-360deg) scale(10)" },
                },
            },
            colors: {
                'dark-blue': '#001f3f',
                'blue-200': '#2e95ff',
            },
        },
    },
    darkMode: "class",
    plugins: [heroui()],
}

export default config;