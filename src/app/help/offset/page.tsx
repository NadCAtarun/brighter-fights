import {CornerLeftUp} from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Link href="/" className="link link-primary">
                <CornerLeftUp className="inline mr-1"/>Return to app
            </Link>

            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-10">Level offset</h1>

                <p className="text-lg mb-4">
                    By default, the app tries to match the player with enemies
                    as close to the player&#39;s level as possible but not higher.
                </p>

                <p className="text-lg mb-4">
                    Depending on your playstyle,
                    you could prefer to fight enemies at a lower or higher level.
                </p>

                <p className="text-lg mb-4">
                    The level offset lets you do just that:
                    specify how many levels above or below the enemies must be.
                </p>

                <p className="text-lg mb-4">
                    For instance, if your offset is <span className="text-primary">-2</span>,
                    the app will not match you with an enemy
                    level <span className="text-primary">58</span> until
                    you reach level <span className="text-primary">60</span>.
                </p>
            </div>
        </>
    );
}
