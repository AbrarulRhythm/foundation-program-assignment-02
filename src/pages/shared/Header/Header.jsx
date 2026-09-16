import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import NavLinks from '../../../components/NavLinks/NavLinks';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className="header-wrap">
            <div className="container">
                <div className="flex items-center justify-between px-3">
                    {/* Logo */}
                    <Logo></Logo>
                    {/* Logo End */}

                    {/* Nav Links */}
                    <NavLinks menuToggle={menuToggle}></NavLinks>
                    {/* Nav Links End */}

                    {/* Right Side (Button) */}
                    <div className="flex gap-3">
                        <Link to="/" className="button">
                            Movies
                        </Link>

                        <button
                            onClick={() => setMenuToggle((prev) => !prev)}
                            className="w-10 h-10 border border-dark-03 flex lg:hidden justify-center items-center text-lg rounded-md"
                        >
                            <FaBars />
                        </button>
                    </div>
                    {/* Right Side (Button) End */}
                </div>
            </div>
        </div>
    );
};

export default Header;
