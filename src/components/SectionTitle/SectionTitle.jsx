const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className="mb-10 lg:mb-12 text-center">
            <h5 className="text-2xl font-Lobster-Two text-primary mb-3">{subTitle}</h5>
            <h1 className="text-[40px] font-semibold text-dark-08">{title}</h1>
        </div>
    );
};

export default SectionTitle;
