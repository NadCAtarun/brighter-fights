import Link from "next/link";
import {Bug, Lightbulb} from "lucide-react";

const FeedbackButtons = () => {
    const suggestionUrl = "https://github.com/NadCAtarun/brighter-fights/issues/new?template=suggestion.md"
        + "&title=Suggestion%3A%20";
    const bugReportUrl = "https://github.com/NadCAtarun/brighter-fights/issues/new?template=bug_report.md"
        + "&title=Bug%3A%20";

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
            <Link
                href={suggestionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
            >
                <Lightbulb/>
                Suggest an Improvement
            </Link>

            <Link
                href={bugReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-error gap-2"
            >
                <Bug/>
                Report a Bug
            </Link>
        </div>
    );
};

export default FeedbackButtons;
