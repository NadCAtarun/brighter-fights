import {CircleAlert, CornerLeftUp} from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Link href="/" className="link link-primary">
                <CornerLeftUp className="inline mr-1"/>Return to app
            </Link>

            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-4">Strategies</h1>
                <h2 className="text-2xl text-center mb-4">How does the app pick weapons to recommend?</h2>

                <p className="text-lg mb-4">
                    Here are the strategies currently implemented in the app:
                </p>

                <div className="space-y-6">
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">Exploit elemental vulnerability</h2>
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
                </div>

                <p className="text-lg mt-4">
                    <span className="text-primary">
                        <CircleAlert className="inline mr-1"/>
                    </span>
                    Both strategies avoid weapons the enemy is immune to.
                </p>
            </div>
        </>
    );
}
