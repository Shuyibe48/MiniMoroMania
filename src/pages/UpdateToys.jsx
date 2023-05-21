import { useState } from 'react';

const UpdateToys = () => {
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the update logic with the form data
        console.log('Submitted:', { price, quantity, description });
    };

    return (
        <div className='form-bg py-12 px-2 lg:px-0'>
            <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-[#000000cb] to-[#00000048]">
                <h1 className="text-2xl font-bold mb-4 text-[#ffc800]">Update Toy Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="price" className="text-[#ffc800] mb-2 block text-sm font-bold">
                            Price
                        </label>
                        <input
                            placeholder='Update Price'
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="text-[#ffc800] mb-2 block text-sm font-bold">
                            Available Quantity
                        </label>
                        <input
                            placeholder='Update Quantity'
                            type="text"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="text-[#ffc800] mb-2 block text-sm font-bold">
                            Detail Description
                        </label>
                        <textarea
                            placeholder='Update Detail Description'
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-semibold mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateToys;