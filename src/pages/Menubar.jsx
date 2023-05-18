import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Menubar = () => {
    // const { user, logOut } = useContext(AuthContext)
    const user = null

    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-[#ffc800] p-6">
            <div className=" text-black mr-6">
                <Link className='flex items-center flex-shrink-0' to="/">
                    <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="MiniMotorMania" className="w-8 h-8 mr-2" />
                    <span className="font-semibold text-xl tracking-tight">MiniMotorMania</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleMenuClick} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-black hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3z" /></svg>
                </button>
            </div>
            <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex ml-auto">
                    <Link className={`mr-4 ${location.pathname === '/' ? 'text-gray-500 font-bold' : 'text-black hover:text-gray-500'}`} to="/">Home</Link>
                    <Link className={`mr-4 ${location.pathname === '/blog' ? 'text-gray-500 font-bold' : 'text-black hover:text-gray-500'}`} to="/blog">Blog</Link>
                </div>
                <div className="flex items-center">
                    {user ? (
                        <>
                            <div className="relative profile-picture">
                                <img className="h-8 w-8 rounded-full cursor-pointer" src={user?.photoURL} alt={user.displayName || 'Profile picture'} />
                                {user.displayName && (
                                    <div className="absolute profile-name top-0 left-full -ml-1 mt-2 px-2 py-1 bg-white rounded-lg shadow-lg">
                                        {user.displayName}
                                    </div>
                                )}
                            </div>
                            <button className="ml-4 px-4 py-2 border rounded text-gray-200 border-gray-400 hover:text-black hover:border-white" onClick={logOut}>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className={`mr-4 ${location.pathname === '/login' ? 'text-gray-500 font-bold' : 'text-black hover:text-gray-500'}`}>
                                <span className='flex items-center'>
                                    <FaUser className="mr-1" />
                                    Log In
                                </span>
                            </Link>
                            <Link to="/register" className={`mr-4 ${location.pathname === '/register' ? 'text-gray-500 font-bold' : 'text-black hover:text-gray-500'}`}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Menubar;