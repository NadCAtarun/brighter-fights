import Link from "next/link";
import {LuBug, LuExternalLink, LuLightbulb} from "react-icons/lu";

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
