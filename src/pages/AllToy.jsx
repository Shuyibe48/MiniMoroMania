import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import AuthProvider from '../provider/AuthProvider';


const AllToy = () => {
    const [toyData, setToyData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0)
    const { totalToys } = useLoaderData()
    const { user } = useContext(AuthProvider)

    const itemsPerPage = 20
    const totalPage = Math.ceil(totalToys / itemsPerPage)

    const pageNumbers = [...Array(totalPage).keys()]

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://mini-motor-mania-server.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json()
            setToyData(data);
        }
        fetchData()
    }, [currentPage, itemsPerPage])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredToys = toyData.filter((toy) =>
        toy.
            toy_name
            .toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>MiniMotorMania | All Toy</title>
            </Helmet>
            <div className='form-bg'>
                <h1 data-aos="fade-up" className="text-4xl font-bold text-[#ffc800] text-center pt-12">All Toy</h1>
                <div className="container mx-auto px-4 py-12">
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 outline-none border border-[#ffc800] bg-transparent text-cyan-100 rounded-md"
                            placeholder="Search by Toy Name"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className='overflow-x-auto'>
                        <table className="min-w-full bg-white border border-[#ffc800]">
                            <thead>
                                <tr className="bg-[#8b6b05] text-cyan-100">
                                    <th className="px-4 py-2">Seller</th>
                                    <th className="px-4 py-2">Toy Name</th>
                                    <th className="px-4 py-2">Sub-category</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Available Quantity</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody className='bg-black'>
                                {filteredToys.map((toy) => (
                                    <tr key={toy._id}>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">
                                            {toy.seller_name ? toy.seller_name : 'Unknown'}
                                        </td>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">{toy.toy_name}</td>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">{toy.sub_category}</td>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">${toy.price}</td>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">{toy.available_quantity}</td>
                                        <td className="border border-[#ffc800] text-cyan-100 px-4 py-2">
                                            <Link to={`/toydetails/${toy._id}`}>
                                                <button
                                                    onClick={() => !user && window.alert('You have to log in first to view details')}
                                                    className="px-4 py-2 bg-[#ffc800] text-black font-bold rounded-md">
                                                    View Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='text-center'>
                    {
                        pageNumbers.map(number => <button
                            className={`p-2 text-black font-bold border border-black rounded ${currentPage === number ? 'bg-[#8b6b05]' : 'bg-[#ffc800]'}`}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}</button>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllToy;
