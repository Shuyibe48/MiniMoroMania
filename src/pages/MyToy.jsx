import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyToy = () => {
    const [toys, setToys] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDeleteToy = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this toy?') 
        if (proceed) {

            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data))

            const updatedToys = toys.filter((toy) => toy._id !== id);
            setToys(updatedToys);
        }
    };

    return (
        <div>
            {toys.map((toy) => (
                <div key={toy._id} className="bg-white p-4 rounded shadow mb-4">
                    <img className='w-36' src={toy.toy_image} alt="" />
                    <h2 className="text-xl font-bold">{toy.toy_name}</h2>
                    <p className="text-gray-500 font-semibold">Price: {toy.price}$</p>
                    <p className="text-gray-500 font-semibold">Ratings: {toy.ratings}</p>
                    <p className="text-gray-500 font-semibold">Sub Category: {toy.sub_category}</p>
                    <p className="text-gray-500 font-semibold">Seller: {toy.seller_name}</p>
                    <p className="text-gray-500 font-semibold">Seller Email: {toy.seller_email}</p>
                    <p className="text-gray-500 font-semibold">Available Quantity: {toy.available_quantity}</p>
                    <p className="text-gray-500 font-semibold">Description: {toy.description}</p>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-semibold mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
                        <button
                            className="px-4 py-2 font-semibold bg-red-500 text-white rounded"
                            onClick={() => handleDeleteToy(toy._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyToy;