import { NavLink } from 'react-router';

const NavLinks = ({ menuToggle }) => {
    return (
        <nav>
            <ul className="hidden lg:flex items-center space-x-6.5 font-medium">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/tv-Series">TV Series</NavLink>
                </li>
            </ul>

            {/* Mobile Nav */}
            <ul
                className={`${menuToggle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex lg:hidden absolute bg-white border border-dark-03 left-3 right-3 top-17.75 rounded-md p-5 flex-col space-y-2 font-medium duration-300`}
            >
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/tv-Series">TV Series</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
