import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="text-dark-08 text-[26px] font-semibold hover:opacity-75 duration-150" title="Film Pulse">
            Film <span className="text-primary">Pulse</span>
        </Link>
    );
};

export default Logo;
