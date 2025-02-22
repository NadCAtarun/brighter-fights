import {CircleAlert} from "lucide-react";
import BackLink from "@/components/back-link";

/**
 * Renders a warning message component.
 */
function Warning() {
    return <p className="text-lg mt-4">
                    <span className="text-primary">
                        <CircleAlert className="inline mr-1"/>
                    </span>
        Both strategies avoid weapons the enemy is immune to.
    </p>;
}

/**
 * A React functional component that renders a list of strategy descriptions for an application.
 * Each strategy card describes a specific approach or method used within the app.
 */
function StrategyDescriptions() {
    return <div className="space-y-6">
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Exploit vulnerability</h2>
                <p className="text-lg">
                    The app favors weapons using the element the enemy is vulnerable to, whenever possible.
                    If multiple such weapons are available, the app will pick the fastest.
                </p>
            </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Quickest Weapon</h2>
                <p className="text-lg">
                    The app ignores vulnerabilities and favors the fastest weapons available.
                </p>
            </div>
        </div>
    </div>;
}

/**
 * Renders the main page for the "Strategies" help section.
 * This page includes an overview of different weapon recommendation strategies,
 * along with explanations for each strategy and additional notes.
 */
export default function Page() {
    return (
        <>
            <BackLink/>

            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-4">Strategies</h1>
                <h2 className="text-2xl text-center mb-4">How does the app pick weapons to recommend?</h2>

                <p className="text-lg mb-4">
                    Here are the strategies currently implemented in the app:
                </p>

                <StrategyDescriptions/>

                <Warning/>
            </div>
        </>
    );
}
