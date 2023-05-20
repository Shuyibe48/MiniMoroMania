import React, { useState } from 'react';

const MyToy = () => {
    const [toys, setToys] = useState([
        {
            id: 1,
            price: 10,
            quantity: 5,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            price: 15,
            quantity: 8,
            description: 'Pellentesque nec justo auctor, pellentesque nisl eget, venenatis sem.',
        },
        // Add more toy objects as needed
    ]);

    const handleDeleteToy = (id) => {
        if (window.confirm('Are you sure you want to delete this toy?')) {
            const updatedToys = toys.filter((toy) => toy.id !== id);
            setToys(updatedToys);
        }
    };

    return (
        <div>
            {toys.map((toy) => (
                <div key={toy.id} className="bg-white p-4 rounded shadow mb-4">
                    <h2 className="text-xl font-bold">Toy Information</h2>
                    <p className="text-gray-500">Price: {toy.price}</p>
                    <p className="text-gray-500">Available Quantity: {toy.quantity}</p>
                    <p className="text-gray-500">Description: {toy.description}</p>
                    <div className="flex justify-end mt-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Update</button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => handleDeleteToy(toy.id)}
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
