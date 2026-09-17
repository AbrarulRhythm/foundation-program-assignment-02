const SectionBanner = ({ title }) => {
    return (
        <section className="bg-[#FFD7DB] mt-18 lg:mt-24 py-12 lg:py-20">
            <div className="container">
                <h1 className="text-center text-dark-08 text-3xl md:text-4xl lg:text-5xl font-semibold">{title}</h1>
            </div>
        </section>
    );
};

export default SectionBanner;
