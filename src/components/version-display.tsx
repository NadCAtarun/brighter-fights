import packageJson from '../../package.json';

/**
 * VersionDisplay is a functional React component that renders the current version of the application.
 * The version is retrieved dynamically from the packageJson file.
 * This component is fixed in the bottom-left corner of the viewport,
 * styled with a semi-transparent background and white text.
 * It serves as a small, unobtrusive way to display the application's version number
 * for debugging or informational purposes.
 */
const VersionDisplay = () => {
    return (
        <div className="fixed bottom-0 left-0 p-2 text-xs bg-black bg-opacity-20 text-white rounded-tr-lg">
            v{packageJson.version}
        </div>
    );
};

export default VersionDisplay;
