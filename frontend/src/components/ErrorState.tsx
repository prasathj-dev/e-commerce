const ErrorState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center mt-22.5">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <svg
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
                Something went wrong
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
                We couldn’t load the products. Please try again later.
            </p>

            <button className="mt-6 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Retry
            </button>
        </div>
    );
};

export default ErrorState;
