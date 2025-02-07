import Link from "next/link";
import {CornerLeftUp} from "lucide-react";

/**
 * BackLink is a React functional component that renders a styled hyperlink.
 *
 * The component includes:
 * - An inline Lucide React CornerLeftUp icon
 * - A link directing users back to the app
 *
 * Use this component on all pages but the main one.
 */
const BackLink = () => {
    return <Link href="/" className="link link-primary">
        <CornerLeftUp className="inline mr-1"/>Return to app
    </Link>;
};

export default BackLink;
