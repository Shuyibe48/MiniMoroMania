import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 px-4">
                    <h3 className="font-bold text-lg mb-4">ChefSavant</h3>
                    <p className="text-sm">
                        ChefSavant is a food-related website that provides recipes and cooking tips from top chefs around the world.
                    </p>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <h3 className="font-bold text-lg mb-4">Links</h3>
                    <ul className="list-reset">
                        <li className="py-2">
                            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                        </li>
                        <li className="py-2">
                            <Link to="/" className="text-white hover:text-gray-400">Recipes</Link>
                        </li>
                        <li className="py-2">
                            <Link to="/blog" className="text-white hover:text-gray-400">Blog</Link>
                        </li>
                        <li className="py-2">
                            <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
                    <form>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter your email" className="bg-gray-700 focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
                            <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-4 rounded">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center">
                <span className="text-gray-400">
                    © 2023 ChefSavant. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;