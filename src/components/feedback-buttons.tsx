import Link from "next/link";
import {Bug, Lightbulb} from "lucide-react";

/**
 * FeedbackButtons is a React functional component that renders two buttons
 * for providing feedback through clickable links. The buttons are fixed
 * in the bottom-right corner of the screen and allow users to either suggest
 * improvements or report bugs.
 *
 * - The "Suggest an Improvement" button redirects users to a GitHub issue template
 *   for submitting a new feature or improvement suggestion.
 * - The "Report a Bug" button redirects users to a GitHub issue template
 *   for reporting a problem or bug in the application.
 *
 * Both buttons open their respective links in a new browser tab.
 */
const FeedbackButtons = () => {
    const newIssueUrl = "https://github.com/NadCAtarun/brighter-fights/issues/new";
    const suggestionUrl = newIssueUrl + "?template=suggestion.md&title=Suggestion%3A%20";
    const bugReportUrl = newIssueUrl + "?template=bug_report.md&title=Bug%3A%20";

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
