const MovieCardSkeleton = () => {
    return (
        <div className="w-6/12 md:w-4/12 lg:w-3/12 px-2 lg:px-3 mb-3 lg:mb-6 animate-pulse">
            <div className="bg-white border border-dark-03 rounded-md p-3.5">
                <div className="w-full h-50 lg:h-81 bg-gray-200 rounded-md">{/* Image */}</div>

                {/* Details */}
                <div className="mt-2.5 lg:mt-3.5 mb-4 lg:mb-5">
                    <div className="w-9/12 h-6 bg-gray-200 rounded-sm mb-5"></div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="w-15 h-2 bg-gray-200 rounded-xs mb-2"></div>
                            <div className="">
                                <div className="w-10 lg:w-25 h-4 bg-gray-200 rounded-xs"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <div className="w-15 h-2 bg-gray-200 rounded-xs mb-2"></div>
                            <div className="text-[12px] lg:text-base font-medium text-dark-08">
                                <div className="w-12.5 lg:w-25 h-4 bg-gray-200 rounded-xs"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full h-10 rounded-md bg-gray-200"></div>
            </div>
        </div>
    );
};

export default MovieCardSkeleton;
