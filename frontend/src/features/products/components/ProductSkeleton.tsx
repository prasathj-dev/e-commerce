const ProductSkeleton = () => {
    const skeletons = Array.from({ length: 10 });
    return (
        <>
            <div className="grid mt-22.5 gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-5">
                {skeletons.map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden flex flex-col p-4 w-50 md:w-64"
                    >
                        <div className="mb-4 h-40 rounded bg-gray-200" />
                        <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
                        <div className="h-4 w-1/2 rounded bg-gray-200" />
                    </div>
                ))}
            </div>
        </>

    );
};

export default ProductSkeleton;
