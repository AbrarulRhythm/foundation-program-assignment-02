import { useEffect, useState } from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import NotFoundMessage from '../../components/NotFoundMessage/NotFoundMessage';
import MovieCard from '../shared/MovieCard/MovieCard';
import MovieCardSkeleton from '../../components/Skeleton/MovieCardSkeleton';
import MovieModal from '../../components/MovieModal/MovieModal';

const AllMovies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const fetchMoviesData = async () => {
            setLoading(true);

            try {
                const query = searchValue.trim();

                const url = query === '' ? 'https://api.tvmaze.com/shows' : `https://api.tvmaze.com/search/shows?q=${query}`;

                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await res.json();

                if (query === '') {
                    const sortedMovies = data
                        .filter((movie) => movie.premiered)
                        .sort((a, b) => new Date(b.premiered) - new Date(a.premiered))
                        .slice(0, 40);

                    setMovies(sortedMovies);
                } else {
                    const formattedData = data.map((item) => item.show);
                    setMovies(formattedData);
                }
            } catch (error) {
                console.log(error.message);
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(() => {
            fetchMoviesData();
        }, 300);

        return () => clearTimeout(timer);
    }, [searchValue]);

    return (
        <>
            <title>Film Pulse - All Movies</title>
            <SectionBanner title="All Movies"></SectionBanner>

            <section className="py-14 lg:py-18">
                <div className="container">
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="w-full lg:w-4/12 px-3 flex justify-end">
                            <input
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                }}
                                type="text"
                                name="searchMovies"
                                className="w-full border border-dark-03 py-3 px-4 rounded-md focus:outline-0 focus:border-primary"
                                placeholder="Search for a movie..."
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 lg:-mx-3">
                        {loading ? (
                            Array.from({ length: 8 }).map((_, index) => <MovieCardSkeleton key={index}></MovieCardSkeleton>)
                        ) : (
                            <>
                                {/* Empty Stare */}
                                {!movies || movies.length === 0 ? (
                                    <NotFoundMessage message="No movies available."></NotFoundMessage>
                                ) : (
                                    // Data Row
                                    movies.map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            onSelectMovie={(movieData) => setSelectedMovie(movieData)}
                                        ></MovieCard>
                                    ))
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Movie modal */}
            {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)}></MovieModal>}
        </>
    );
};

export default AllMovies;
