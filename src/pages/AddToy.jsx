import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const [toy_image, setToy_image] = useState('');
    const [toy_name, setToyName] = useState('');
    const [seller_name, setSellerName] = useState(user.displayName);
    const [seller_email, setSellerEmail] = useState(user.email);
    const [sub_category, setToySubcategory] = useState('');
    const [price, setPrice] = useState('');
    const [ratings, setRating] = useState('');
    const [available_quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();

        // form data
        const toyData = {
            toy_image,
            toy_name,
            seller_name,
            seller_email,
            sub_category,
            price,
            ratings,
            available_quantity,
            description,
        };

        // Reset the form fields
        setToy_image('');
        setToyName('');
        setSellerName(user.displayName);
        setSellerEmail(user.email);
        setToySubcategory('');
        setPrice('');
        setRating('');
        setQuantity('');
        setDescription('');

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className='form-bg py-12'>
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-4xl font-bold mb-6 text-[#ffc800]">Add A Toy</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="toy_image" className="block mb-2 text-[#ffc800] font-bold">
                            Picture URL of the toy:
                        </label>
                        <input
                            placeholder='Picture URL of the toy'
                            type="text"
                            id="toy_image"
                            value={toy_image}
                            onChange={(e) => setToy_image(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toy_name" className="block mb-2 text-[#ffc800] font-bold">
                            Toy Name:
                        </label>
                        <input
                            placeholder='Toy Name'
                            type="text"
                            id="toy_name"
                            value={toy_name}
                            onChange={(e) => setToyName(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="seller_name" className="block mb-2 text-[#ffc800] font-bold">
                            Seller Name:
                        </label>
                        <input
                            disabled
                            type="text"
                            id="seller_name"
                            value={seller_name}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="seller_email" className="block mb-2 text-[#ffc800] font-bold">
                            Seller Email:
                        </label>
                        <input
                            disabled
                            type="email"
                            id="seller_email"
                            value={seller_email}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className="block mb-2 text-[#ffc800] font-bold" htmlFor="dropdown">Toy Sub-category:</label>
                        <select onChange={(e) => setToySubcategory(e.target.value)} className='w-full p-2 rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100' id="dropdown">
                            <option className='bg-black' value="">Select an option</option>
                            <option className='bg-black' value="Sports Car">Sports Car</option>
                            <option className='bg-black' value="Mini Fire Truck">Mini Fire Truck</option>
                            <option className='bg-black' value="Mini Police Car">Mini Police Car</option>
                        </select>
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
                        <label htmlFor="ratings" className="block mb-2 text-[#ffc800] font-bold">
                            Rating:
                        </label>
                        <input
                            placeholder='Rating'
                            type="text"
                            id="ratings"
                            value={ratings}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full p-2 border rounded border border-[#ffc800] bg-transparent outline-none text-cyan-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="available_quantity" className="block mb-2 text-[#ffc800] font-bold">
                            Available available_quantity:
                        </label>
                        <input
                            placeholder='Available available_quantity'
                            type="text"
                            id="available_quantity"
                            value={available_quantity}
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
