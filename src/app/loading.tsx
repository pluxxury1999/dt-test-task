export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-purple-600 rounded-full"
                role="status"
                aria-label="Loading"
            ></div>
        </div>
    );
}
