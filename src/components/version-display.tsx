import packageJson from '../../package.json';

/**
 * VersionDisplay is a functional React component that renders
 * the current application version in a fixed position at the
 * bottom-left of the screen. The version number is dynamically
 * retrieved from the packageJson file.
 */
const VersionDisplay = () => (
    <div className="fixed bottom-0 left-0 p-2 text-xs bg-black/20 text-white rounded-tr-lg">
        v{packageJson.version}
    </div>
);

export default VersionDisplay;
