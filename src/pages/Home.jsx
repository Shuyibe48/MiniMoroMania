import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import CategoryTab from '../components/CategoryTab';
import ContactPage from '../components/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Sponsers from '../components/Sponsers';



const Home = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <Helmet>
                <title>MiniMotorMania | Home</title>
            </Helmet>
            <Banner />
            <div data-aos='fade-up'>
                <Gallery />
            </div>
            <CategoryTab />
            <Sponsers />
            <ContactPage />
        </>
    );
};

export default Home;