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
        themes: ["retro"]
    }
} satisfies Config;
