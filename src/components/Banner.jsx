const Banner = () => {
    return (
        <div className="relative h-80 w-full">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80')" }}
                ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
            <div className="ps-4 lg:ps-0 relative z-2 flex flex-col items-center justify-center h-full">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to ChefSavant</h1>
                <p className="text-white text-lg mb-8">Discover new recipes and cooking tips from top chefs in the Australia</p>
                <button className="bg-white py-2 px-6 rounded-full shadow-md text-gray-800 font-medium transition-all duration-200 hover:bg-gray-800 hover:text-white">Get started</button>
            </div>
        </div>
    );
};

export default Banner;