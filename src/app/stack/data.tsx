import {LuCloud, LuLaptop, LuPalette} from "react-icons/lu";

const techStack = [
    {
        icon: <LuCloud className="text-primary"/>,
        label: "Webhost",
        title: "Vercel",
        description: "Seamless serverless deployment platform and global CDN",
        url: "https://vercel.com/",
        logo: "/3rdparty/vercel.svg"
    },
    {
        icon: <LuLaptop className="text-secondary"/>,
        label: "Frontend",
        title: "Next.js",
        description: "React framework with powerful static rendering",
        url: "https://nextjs.org/",
        logo: "/3rdparty/nextjs.svg"
    },
    {
        icon: <LuPalette className="text-primary"/>,
        label: "Styling",
        title: "Tailwind CSS",
        description: "Cutting-edge utility-first CSS framework",
        url: "https://tailwindcss.com/",
        logo: "/3rdparty/tailwind.svg"
    },
];

export {techStack};
