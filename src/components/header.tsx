import ExternalLink from "@/components/external-link";

const Header = () => (
    <header className="flex justify-center">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-secondary m-4">✨Brighter Fights✨</h1>
            <h2 className="text-2xl font-bold mb-4">Combat companion app for
                <ExternalLink url="https://www.brightershores.com/" label="Brighter Shores"/>
            </h2>
        </div>
    </header>
);

export default Header;
