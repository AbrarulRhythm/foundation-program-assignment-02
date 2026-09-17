import notMovies from '../../assets/film-not.png';

const NotFoundMessage = ({ message }) => {
    return (
        <div className="w-full px-3 text-center ">
            <div>
                <img src={notMovies} className="w-15 mx-auto mb-2.5" alt="movies icon" />
                <h4 className="text-lg">{message}</h4>
            </div>
        </div>
    );
};

export default NotFoundMessage;
