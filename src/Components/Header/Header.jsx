import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="flex justify-center items-center lg:text-xl font-bold text-md"><img className="lg:w-10 w-8 h-12"  src="https://i.ibb.co/w0jg63W/istockphoto-1197901679-612x612.jpg" alt="" /> BookPulse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end lg:gap-3">
                <a className="btn bg-green-500 text-white">Sign In</a>
                <a className="btn bg-blue-400 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;