import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AllCar = () => {
    const {toyData} = useContext(AuthContext)


    return (
        <div className="px-2 lg:px-0">
            <h2 className="text-2xl font-bold text-[#ffc800] py-4">All Car</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {toyData.map((toy) => (
                    <div key={toy._id} className="relative bg-white rounded shadow overflow-hidden">
                        <img src={toy.toy_image} alt={toy.toy_name} className="w-full h-48 object-cover" />
                        <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-[#000000f5] via-[#00000081] to-transparent text-white">
                            <h2 className="text-xl font-bold mb-2">{toy.toy_name}</h2>
                            <p className="text-gray-300 font-bold mb-2">Price: ${toy.price}</p>
                            <p className="text-gray-300 font-bold mb-2">Rating: {toy.ratings}</p>
                            <Link to={`/toydetails/${toy._id}`}>
                                <button className="px-4 py-2 bg-[#ffc800] font-bold text-black rounded">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCar;
