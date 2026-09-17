import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import NotFoundMessage from '../../../components/NotFoundMessage/NotFoundMessage';

const LatestMovie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch('https://api.tvmaze.com/showss');

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

            <div className="flex flex-wrap -mx-3">
                {loading ? (
                    <div>This is Loading .....</div>
                ) : (
                    <>
                        {/* Empty Stare */}
                        {!movies || movies.length === 0 ? (
                            <NotFoundMessage message="No movies available."></NotFoundMessage>
                        ) : (
                            // Data Row
                            <div>{movies.length}</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default LatestMovie;
