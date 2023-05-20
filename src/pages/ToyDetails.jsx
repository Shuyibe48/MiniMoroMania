import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData()
    const {
        toy_image,
        toy_name,
        seller_name,
        seller_email,
        price,
        ratings,
        available_quantity,
        description,
    } = toy;


    return (
        <div className="flex flex-col items-center p-8">
            <img src={toy_image} alt={toy_name} className="w-64 h-64 mb-4" />
            <h2 className="text-2xl font-bold mb-2">{toy_name}</h2>
            <p className="text-gray-500 mb-2 font-bold">Seller: {seller_name}</p>
            <p className="text-gray-500 mb-2 font-bold">Email: {seller_email}</p>
            <p className="text-green-500 font-bold text-xl mb-2">${price}</p>
            <div className="flex items-center mb-2">
                <span className="mr-1 font-bold">Rating: ({ratings})</span>
                <div className="flex">
                    {Array.from({ length: ratings }).map((_, index) => (
                        <svg
                            key={index}
                            className="w-5 h-5 text-yellow-500 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 2.667l2.76 5.67 6.22.9-4.51 4.39 1.07 6.21L10 16.6l-5.54 2.92 1.07-6.21L1.02 9.24l6.22-.9L10 2.67zm0-1.334L7.33 6.203l-5.67.823 4.096 4-1.029 5.982L10 15.536l5.573 2.872-1.029-5.982 4.096-4-5.67-.823L10 1.333z"
                            />
                        </svg>
                    ))}
                </div>
            </div>
            <p className="text-gray-500 mb-2 font-bold">Available Quantity: {available_quantity}</p>
            <p className="text-gray-700 font-bold">Details: {description}</p>
        </div>
    );
};

export default ToyDetails;

