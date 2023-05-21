import Marquee from "react-fast-marquee";

const Sponsers = () => {
    return (
        <div className=" pb-28 container mx-auto">
            <h1 className="text-4xl font-bold text-[#ffc800] text-center my-12">Our Sponsers</h1>
            <Marquee>
                <div className="flex items-center gap-6">
                    <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
                    <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
                    <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="" />
                    <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" />
                    <img className="w-52 mr-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Sponsers;