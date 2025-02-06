import {Cloud, Laptop, Palette} from "lucide-react";

const techStack = [
    {
        icon: <Cloud className="text-primary"/>,
        label: "Webhost",
        title: "Vercel",
        description: "Seamless serverless deployment platform and global CDN",
        url: "https://vercel.com/",
        logo: "/3rdparty/vercel.svg"
    },
    {
        icon: <Laptop className="text-secondary"/>,
        label: "Frontend",
        title: "Next.js",
        description: "React framework with powerful static rendering",
        url: "https://nextjs.org/",
        logo: "/3rdparty/nextjs.svg"
    },
    {
        icon: <Palette className="text-primary"/>,
        label: "Styling",
        title: "Tailwind CSS",
        description: "Cutting-edge utility-first CSS framework",
        url: "https://tailwindcss.com/",
        logo: "/3rdparty/tailwind.svg"
    },
];

export {techStack};
