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
                "meteor-effect": "meteor 5s linear infinite",
            },
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg) scale(10)" },
                    "100%": { transform: "rotate(-360deg) scale(10)" },
                },
                bounce: {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                        "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateX(0)",
                        " animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            },
            colors: {
                'dark-blue': '#001f3f',
                'blue-200': '#2e95ff',
                'blue-100': '#43a0ff',
                'blue-50': '#6cc3ff',
                'orange': '#F0892E',
            },
        },
    },
    darkMode: "class",
    plugins: [heroui()],
}

export default config;