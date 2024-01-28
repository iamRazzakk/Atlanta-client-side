import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from './../UsersRegisterAndLogin/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLink = <>
        <ul className=" md:flex gap-6 text-white">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about-us"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact-us"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </ul>


    </>
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.error(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }
                        {
                            user ? <><li>
                                <NavLink
                                    onClick={handleLogout}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                                    }
                                >
                                    Logout
                                </NavLink>
                            </li>
                            </> :
                                <>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
                <a className="md:text-4xl font-bold font-Bricolage">Atlanta</a>
                <div className="form-control md:ml-4">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                        {
                            user ? <><li>
                                <NavLink
                                    onClick={handleLogout}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                                    }
                                >
                                    Logout
                                </NavLink>
                            </li>
                            </> :
                                <>
                                    <li>
                                        <NavLink
                                            to="/contact-us"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;