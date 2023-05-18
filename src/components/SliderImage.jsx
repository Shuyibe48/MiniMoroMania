const SliderImage = ({ image, currentIndex, index }) => {
    const slideData = [
        { heading: 'Turbo Twister', text: ' Zooms through obstacles with incredible speed, spinning and flipping for an adrenaline-pumping adventure.' },
        { heading: 'Speedy Racer', text: 'Sleek and aerodynamic, this car blazes down tracks, leaving competitors in the dust with its lightning-fast acceleration.' },
        { heading: 'Lightning Bolt', text: 'Strikes the road with electrifying velocity, its sleek design and quick maneuvers making it unbeatable in any race.' },
        { heading: 'Power Wheels', text: 'Dominate any terrain with unstoppable power, conquering hills, dirt trails, and even jumps with ease.' },
        { heading: 'Drift King', text: 'Master of controlled slides, this car drifts around corners with precision, leaving a trail of tire marks and awe-inspired onlookers.' },
        { heading: 'Roadster Rocket', text: 'Blast off on imaginative adventures, this rocket-inspired roadster propels young minds to the outer limits of fun and exploration.' },
        { heading: 'Mini Muscle', text: 'Small in size but big on power, this miniature muscle car showcases fierce acceleration and an aggressive roar that demands attention.' },
    ];

    return (
        <div
            className={`absolute h-full w-full transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <img className="h-full w-full object-cover" src={image} alt={`Slide ${index + 1}`} />
            <div className="absolute w-full h-full bg-gradient-to-r from-[#000000ec] to-[#00000048] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex justify-center items-center">
                <div>
                    <h1 className="px-2 lg:px-0 lg:w-3/6 mx-auto text-6xl text-cyan-100 font-extrabold mb-4">{slideData[index].heading}</h1>
                    <p className="px-2 lg:px-0 lg:w-3/6 mx-auto font-semibold text-2xl text-cyan-200">{slideData[index].text}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;
