import Link from "next/link";
import {CornerLeftUp} from "lucide-react";

const BackLink = () => {
    return <Link href="/" className="link link-primary">
        <CornerLeftUp className="inline mr-1"/>Return to app
    </Link>;
};

export default BackLink;
