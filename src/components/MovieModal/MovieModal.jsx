import { CgClose } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa';

const MovieModal = ({ movie, onClose }) => {
    const { image, name, rating, premiered, status, averageRuntime, officialSite, summary } = movie;

    if (!movie) {
        return null;
    }

    console.log(movie);

    return (
        <>
            {/* {isOepn && ( */}
            <div
                onClick={onClose}
                className="h-full w-full bg-dark-09/50 fixed top-[50%] left-[50%] translate-[-50%] flex justify-center items-center z-50"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white h-[600px] lg:h-auto overflow-y-auto  w-2xl shadow-2xl rounded-md mx-3"
                >
                    <div className="flex justify-between items-center p-4 border-b border-dark-03">
                        <div></div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 border border-dark-03 flex items-center justify-center text-xl rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary duration-300"
                        >
                            <CgClose />
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full lg:w-4/12 px-3 mb-6">
                                <img src={image?.medium} className="rounded-md w-full" alt="movie image" />
                            </div>
                            <div className="w-full lg:w-8/12 px-3">
                                <h2 className="text-lg text-dark-09 font-semibold">{name}</h2>

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

                                <ul className="text-sm space-y-2 mt-4">
                                    <li>
                                        <span className="text-dark-08 font-medium">Average Runtime: </span> {averageRuntime}
                                    </li>
                                    <li>
                                        <span className="text-dark-08 font-medium">Status: </span> {status}
                                    </li>
                                    <li>
                                        <span className="text-dark-08 font-medium">Official Site: </span>{' '}
                                        <a href={officialSite} target="_blank" className="text-primary font-semibold">
                                            Visit Site
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-dark-08 font-medium">Summary: </span> {summary}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="float-right m-3 text-sm text-white bg-primary py-2 px-6 font-medium rounded-md active:scale-95 duration-300 hover:shadow-btn-inner cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default MovieModal;
