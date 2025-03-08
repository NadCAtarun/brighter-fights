import {LuCornerLeftUp} from "react-icons/lu";
import Link from "next/link";

const BackLink = () => {
    return <Link href="/" className="link link-primary">
        <LuCornerLeftUp className="inline mr-1"/>Return to app
    </Link>;
};

export default BackLink;
