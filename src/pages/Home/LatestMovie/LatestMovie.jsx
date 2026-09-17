import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import NotFoundMessage from '../../../components/NotFoundMessage/NotFoundMessage';
import MovieCard from '../../shared/MovieCard/MovieCard';
import { Link } from 'react-router';

const LatestMovie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch('https://api.tvmaze.com/shows');

                if (!res.ok) {
                    throw new Error(res.message || 'Something went wrong!');
                }

                const data = await res.json();

                const sortedMovies = data
                    .filter((movie) => movie.premiered)
                    .sort((a, b) => new Date(b.premiered) - new Date(a.premiered))
                    .slice(0, 8);

                setMovies(sortedMovies);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="container">
            <SectionTitle subTitle="Search Less. Watch More." title="Latest Movies"></SectionTitle>

            <div className="flex flex-wrap -mx-2 lg:-mx-3">
                {loading ? (
                    <div>This is Loading .....</div>
                ) : (
                    <>
                        {/* Empty Stare */}
                        {!movies || movies.length === 0 ? (
                            <NotFoundMessage message="No movies available."></NotFoundMessage>
                        ) : (
                            // Data Row
                            movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                        )}
                    </>
                )}
            </div>

            <div className="text-center mt-6">
                <Link to="/all-movies" className="button">
                    All Movies
                </Link>
            </div>
        </div>
    );
};

export default LatestMovie;
