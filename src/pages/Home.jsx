import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import CategoryTab from '../components/CategoryTab';
import ContactPage from '../components/ContactPage';
import AOS from 'aos';
import { Helmet } from 'react-helmet';



const Home = () => {

    return (
        <>
            <Helmet>
                <title>MiniMotorMania | Home</title>
            </Helmet>
            <Banner />
            <Gallery />
            <CategoryTab />
            <ContactPage />
        </>
    );
};

export default Home;