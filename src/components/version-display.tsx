import packageJson from '../../package.json';

const VersionDisplay = () => {
    return (
        <div className="fixed bottom-0 left-0 p-2 text-xs bg-black bg-opacity-20 text-white rounded-tr-lg">
            v{packageJson.version}
        </div>
    );
};

export default VersionDisplay;
