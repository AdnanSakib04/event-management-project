import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""} to="/login">Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""} to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Event Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>

            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <p>{user?.displayName}</p>
                            <label  className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 h-10 rounded-[40px] ">
                                <img src={user?.photoURL} />
                            </div>
                            </label>
                            <button onClick={handleSignOut} className="btn">Log Out</button>
                        </div>

                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;