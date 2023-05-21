import Aos from "aos";
import { useEffect } from "react";

const Gallery = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="pt-">
      <h1 data-aos="fade-up" className="text-6xl font-bold text-[#ffc800] text-center my-28">Toy Gallery</h1>
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
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Turbo Twister</h3>
                <p className="mt-2 text-xs">Zooms through obstacles with incredible speed</p>
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
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Speedy Racer</h3>
                <p className="mt-2 text-xs">Sleek and aerodynamic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1597670250484-0e9aff7f8804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Lightning Bolt</h3>
                <p className="mt-2 text-xs">Strikes the road with electrifying velocity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 4"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Power Wheels</h3>
                <p className="mt-2 text-xs">Dominate any terrain with unstoppable power</p>
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
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Roadster Rocket</h3>
                <p className="mt-2 text-xs">Blast off on imaginative adventures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 6"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Mini Muscle</h3>
                <p className="mt-2 text-xs">Small in size but big on power</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 7"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Lightning Bolt</h3>
                <p className="mt-2 text-xs">Strikes the road with electrifying velocity</p>
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
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Turbo Twister</h3>
                <p className="mt-2 text-xs">Zooms through obstacles with incredible speed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 9"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Roadster Rocket</h3>
                <p className="mt-2 text-xs">Blast off on imaginative adventures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 10"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-[#ffc800] text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-xs lg:text-xs lg:text-lg font-bold">Lightning Bolt</h3>
                <p className="mt-2 text-xs">Strikes the road with electrifying velocity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;