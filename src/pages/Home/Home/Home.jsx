import Hero from '../Hero/Hero';
import LatestMovie from '../LatestMovie/LatestMovie';

const Home = () => {
    return (
        <>
            {/* Hero */}
            <Hero></Hero>
            {/* Hero End */}

            {/* Latest Movies */}
            <section className="py-14 lg:py-18">
                <LatestMovie></LatestMovie>
            </section>
            {/* Latest Movies End */}
        </>
    );
};

export default Home;
