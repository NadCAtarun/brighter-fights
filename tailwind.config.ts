import type {Config} from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['var(--font-title)', 'serif'],
                text: ['var(--font-text)', 'sans-serif'],
            }
        },
    },
    plugins: [
        daisyui
    ],
    daisyui: {
        themes: [
            "retro",
            {
                brighter: {
                    "primary": "#E1D752",
                    "secondary": "#D9D3BA",
                    "accent": "#51B0DE",
                    "neutral": "#164e63",
                    "base-100": "#143140",
                    "info": "#51B0DE",
                    "success": "#10b981",
                    "warning": "#DDA85C",
                    "error": "#f43f5e",
                },
            },
        ]
    }
} satisfies Config;
