import { Link } from "react-router-dom";

const SportsCar = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 15.99,
            rating: 3.8,
            image: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 12.99,
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 8.99,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
    ];

    return (
        <div className="px-2 lg:px-0">
            <h2 className="text-2xl font-bold text-[#ffc800] py-4">Sports Car</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative bg-white rounded shadow overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent text-white">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-300 font-bold mb-2">Price: ${product.price}</p>
                            <p className="text-gray-300 font-bold mb-2">Rating: {product.rating}</p>
                            <Link to="/toydetails">
                                <button className="px-4 py-2 bg-[#ffc800] font-bold text-black rounded">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsCar;
