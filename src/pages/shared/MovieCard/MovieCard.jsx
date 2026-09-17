import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
    const { image, name, rating, premiered } = movie;

    return (
        <div className="w-6/12 md:w-4/12 lg:w-3/12 px-2 lg:px-3 mb-3 lg:mb-6">
            <div className="bg-white border border-dark-03 rounded-md p-3.5">
                <div className="overflow-hidden">
                    <img src={image?.medium} className="rounded-md w-full" alt="movie image" />
                </div>

                {/* Details */}
                <div className="mt-2.5 lg:mt-3.5 mb-4 lg:mb-5">
                    <h4 className="text-base lg:text-lg font-medium text-dark-08 mb-1 lg:mb-2.5">{name}</h4>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[10px] lg:text-[12px] mb-1 inline-block">Ratting</span>
                            <div className="flex items-center gap-1.5 font-medium text-dark-08 text-[12px] lg:text-base">
                                <FaStar className="text-yellow-400" /> <span className="inline-block">{rating.average}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] lg:text-[12px] mb-1 inline-block">Premiered</span>
                            <div className="text-[12px] lg:text-base font-medium text-dark-08">
                                <span>{premiered}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* See Details Button */}
                <button className="w-full font-medium bg-primary text-white text-[12px] lg:text-sm py-2 lg:py-2.5 px-4 rounded-md hover:shadow-btn-inner cursor-pointer active:scale-95 duration-300">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
