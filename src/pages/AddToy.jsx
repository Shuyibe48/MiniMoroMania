import React, { useState } from 'react';

const AddToy = () => {
    const [pictureUrl, setPictureUrl] = useState('');
    const [toyName, setToyName] = useState('');
    const [sellerName, setSellerName] = useState('Unknown');
    const [sellerEmail, setSellerEmail] = useState('');
    const [toySubcategory, setToySubcategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Perform your desired action with the form data
        const toyData = {
            pictureUrl,
            toyName,
            sellerName,
            sellerEmail,
            toySubcategory,
            price,
            rating,
            quantity,
            description,
        };

        // Reset the form fields
        setPictureUrl('');
        setToyName('');
        setSellerName('Unknown');
        setSellerEmail('');
        setToySubcategory('');
        setPrice('');
        setRating('');
        setQuantity('');
        setDescription('');

        // You can do something with the toyData, like sending it to an API or storing it in a database
        console.log(toyData);
    };

    return (
        <div className='form-bg py-12'>
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-4xl font-bold mb-4 text-[#ffc800]">Add A Toy</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block mb-2 text-[#ffc800] font-bold">
                            Picture URL of the toy:
                        </label>
                        <input
                            placeholder='Picture URL of the toy'
                            type="text"
                            id="pictureUrl"
                            value={pictureUrl}
                            onChange={(e) => setPictureUrl(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toyName" className="block mb-2 text-[#ffc800] font-bold">
                            Toy Name:
                        </label>
                        <input
                            placeholder='Toy Name'
                            type="text"
                            id="toyName"
                            value={toyName}
                            onChange={(e) => setToyName(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-2 text-[#ffc800] font-bold">
                            Seller Name:
                        </label>
                        <input
                            placeholder='Seller Name'
                            type="text"
                            id="sellerName"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block mb-2 text-[#ffc800] font-bold">
                            Seller Email:
                        </label>
                        <input
                            placeholder='Seller Email'
                            type="email"
                            id="sellerEmail"
                            value={sellerEmail}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toySubcategory" className="block mb-2 text-[#ffc800] font-bold">
                            Toy Sub-category:
                        </label>
                        <input
                            placeholder='Toy Sub-category'
                            type="text"
                            id="toySubcategory"
                            value={toySubcategory}
                            onChange={(e) => setToySubcategory(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 text-[#ffc800] font-bold">
                            Price:
                        </label>
                        <input
                            placeholder='$Price'
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2 text-[#ffc800] font-bold">
                            Rating:
                        </label>
                        <input
                            placeholder='Rating'
                            type="text"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-2 text-[#ffc800] font-bold">
                            Available quantity:
                        </label>
                        <input
                            placeholder='Available quantity'
                            type="text"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-[#ffc800] font-bold">
                            Detail description:
                        </label>
                        <textarea
                            placeholder='Detail description...'
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;
