import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import '../Css/nav.css';


function Nav() {

    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    function handelLogout() {
        logout();
    }

    return (
        <>
            <nav>
                <img src="https://www.simplilearn.com/ice9/new_logo.svgz" className='logo' />

                <div className={`menu ${menuOpen ? 'slidemenu' : ''}`}>
                    <i
                        id="mnuclose"
                        className={`ri-arrow-right-line ${menuOpen ? '' : 'rotate180'}`}
                        onClick={toggleMenu}
                    ></i>

                    {/* Conditionally render "Home" link if not on the home route */}
                    {location.pathname !== '/' && (
                        <Link className="options" to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    )}

                    {/* <Link className="options" to="/allposts" onClick={closeMenu}>
                        Explore
                    </Link> */}
                    <div id='Signup-btn' className='options lg:border-[1px] md:border-black-200'>
                        <i className="ri-user-line"></i> Signup
                    </div>
                </div>

                <i id="mnubtn" className="ri-menu-line" onClick={toggleMenu}></i>
            </nav>
        </>
    );
}

export default Nav;
