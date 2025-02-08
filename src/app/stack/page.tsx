import TechStackStep from "@/app/stack/step";
import {techStack} from "@/app/stack/data";
import BackLink from "@/components/back-link";

/**
 * Renders the Tech Stack page,
 * showing the layers the app relies on,
 * from back-end to front-end.
 */
export default function Page() {
    return (
        <>
            <BackLink/>
            <div className="p-8 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8">🛠️ This website&#39;s technological stack</h2>
                <ul className="steps steps-vertical">
                    {techStack.map((step) => (
                        <TechStackStep key={step.label} {...step} />
                    ))}
                </ul>
            </div>
        </>
    );
}
