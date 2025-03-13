import {LuCornerLeftUp} from "react-icons/lu";
import Link from "next/link";

/**
 * BackLink is a React functional component that renders a navigational link.
 * It redirects the user to the root path ("/") of the application.
 *
 * The component uses the `Link` element for navigation and includes an icon
 * alongside the text "Return to app". The link is styled with classes for a
 * primary link appearance and additional spacing between the icon and text.
 *
 * This component is specifically designed for providing users with an easy way
 * to navigate back to the main application page.
 */
const BackLink = () => {
    return <Link href="/" className="link link-primary">
        <LuCornerLeftUp className="inline mr-1"/>Return to app
    </Link>;
};

export default BackLink;
