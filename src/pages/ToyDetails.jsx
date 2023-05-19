const ToyDetails = () => {
    return (
        <div className='form-bg'>
            <div className="container mx-auto px-4 py-8">
                <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        className="w-full h-64 object-cover object-center"
                        src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Toy"
                    />
                    <div className="py-4 px-6">
                        <h2 className="text-4xl mb-2 font-bold text-[#8b6b05]">Toy Name</h2>
                        <p className="text-2xl text-[#8b6b05]"><span className=' font-bold'>Seller:</span> John Doe</p>
                        <p className="text-2xl text-[#8b6b05]"><span className=' font-bold'>Seller Email:</span> johndoe@example.com</p>
                        <p className="text-2xl text-[#8b6b05]"><span className=' font-bold'>Price:</span> $29.99</p>
                        <p className="text-2xl text-[#8b6b05]"><span className=' font-bold'>Rating:</span> 4.5</p>
                        <p className="text-2xl text-[#8b6b05]"><span className=' font-bold'>Available Quantity:</span> 5</p>
                        <p className="text-[#8b6b05] text-2xl mt-4">
                            <span className='font-bold'>Detail Description: </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla blandit mauris, non volutpat nisi. Sed vulputate venenatis massa, at tincidunt tellus ultrices vitae. Nulla vitae bibendum nisl.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
