import { Link } from 'react-router';

const Logo = ({ style = 'text-dark-08' }) => {
    return (
        <Link to="/" className={`${style} text-[26px] font-semibold hover:opacity-75 duration-150`} title="Film Pulse">
            Film <span className="text-primary">Pulse</span>
        </Link>
    );
};

export default Logo;
