import Link from "next/link";
import {LuBug, LuExternalLink, LuLightbulb} from "react-icons/lu";

/**
 * FeedbackButtons is a React functional component that provides quick links
 * for users to give feedback in the form of improvement suggestions or bug reports.
 *
 * The component displays two buttons:
 * - One for suggesting an improvement.
 * - Another for reporting a bug.
 * Both buttons redirect users to pre-filled issue templates on a specified GitHub repository.
 *
 * The buttons are styled and positioned as a fixed overlay on the bottom-right corner of the page.
 * The links open in a new tab and include security attributes to mitigate potential vulnerabilities.
 */
const FeedbackButtons = () => {
    const newIssueUrl = "https://github.com/NadCAtarun/brighter-fights/issues/new";
    const suggestionUrl = `${newIssueUrl}?template=suggestion.md&title=Suggestion%3A%20[Enter a title]`;
    const bugReportUrl = `${newIssueUrl}?template=bug_report.md&title=Bug Report%3A%20[Enter a title]`;

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
            <Link
                href={suggestionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-outline gap-2"
            >
                <LuLightbulb className="mr-auto"/>
                Suggest an Improvement
                <LuExternalLink className="ml-auto"/>
            </Link>

            <Link
                href={bugReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-error btn-outline gap-2"
            >
                <LuBug className="mr-auto"/>
                Report a Bug
                <LuExternalLink className="ml-auto"/>
            </Link>
        </div>
    );
};

export default FeedbackButtons;
