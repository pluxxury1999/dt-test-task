export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-blue-500 rounded-full"
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
