import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="hero-section mt-18 lg:mt-24">
            <div className="px-5 md:px-6 lg:px-8 2xl:px-10">
                <div className="hero py-12 md:py-14 lg:py-25 rounded-2xl text-white">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full lg:w-8/12 2xl:w-8/12 px-3">
                                <div className="hero-contents p-4 md:p-6">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <h5 className="text-xl font-Lobster-Two">Search Less. Watch More.</h5>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl lg:text-[58px] 2xl:text-[64px] leading-[1.4] font-bold mb-2">
                                        Unlock Every Cinematic Experience
                                    </h1>
                                    <p className="text-sm md:text-base max-w-164">
                                        The all-in-one platform for exploring detailed actor profiles, comprehensive film statistics, and
                                        current box office trends.
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-4 lg:gap-6 mt-6">
                                        <Link
                                            to="/"
                                            className="inline-block font-medium bg-white text-primary py-3.5 px-10 rounded-md hover:bg-primary hover:text-white duration-300 active:scale-95"
                                        >
                                            Explore Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
