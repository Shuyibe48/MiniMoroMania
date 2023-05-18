import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menubar = () => {
    // const { user, logOut } = useContext(AuthContext)
    const user = null

    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/">
                    <span className="font-semibold text-xl tracking-tight">ChefSavant</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleMenuClick} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3z" /></svg>
                </button>
            </div>
            <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link className={`mr-4 ${location.pathname === '/' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`} to="/">Home</Link>
                    <Link className={`mr-4 ${location.pathname === '/blog' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`} to="/blog">Blog</Link>
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
                            <button className="ml-4 px-4 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white" onClick={logOut}>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className={`mr-4 ${location.pathname === '/login' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`}>
                                Log In
                            </Link>
                            <Link to="/register" className={`mr-4 ${location.pathname === '/register' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`}>
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