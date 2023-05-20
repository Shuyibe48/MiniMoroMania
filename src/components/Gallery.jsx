const Gallery = () => {
  return (
    <div className="pt-">
      <h1 className="text-6xl font-bold text-[#ffc800] text-center my-28">Toy Gallery</h1>
      <div className="container mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className="col-span-2 row-span-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584641911870-6196a92c1920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 1</h3>
                <p className="mt-2">Description 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 2</h3>
                <p className="mt-2">Description 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 3</h3>
                <p className="mt-2">Description 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 4"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 4</h3>
                <p className="mt-2">Description 4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 5"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 5</h3>
                <p className="mt-2">Description 5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 6"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 6</h3>
                <p className="mt-2">Description 6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 7"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 7</h3>
                <p className="mt-2">Description 7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 8"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 8</h3>
                <p className="mt-2">Description 8</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 9"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 9</h3>
                <p className="mt-2">Description 9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 10"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold">Title 10</h3>
                <p className="mt-2">Description 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;