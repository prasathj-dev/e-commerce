const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                    />
                </svg>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
                No products found
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
                Try adjusting your search or explore other products.
            </p>
        </div>
    );
};

export default EmptyState;
